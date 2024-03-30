package models

import (
	"database/sql"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
)

type Products struct {
	ProductID     string
	Name          string
	Description   string
	Value         string
	AvailableSale string
}

func GetAllProducts(db *sql.DB) gin.HandlerFunc {

	return func(c *gin.Context) {
		rows, err := db.Query("SELECT * FROM products order by Value ASC")
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		defer rows.Close()

		var products []Products

		for rows.Next() {
			var product Products

			if err := rows.Scan(&product.ProductID, &product.Name, &product.Description, &product.Value, &product.AvailableSale); err != nil {
				c.JSON(500, gin.H{"error": err.Error()})
				return
			}
			products = append(products, product)
		}
		c.IndentedJSON(200, products)
		return
	}
}

func PostProducts(db *sql.DB) gin.HandlerFunc {

	return func(c *gin.Context) {
		var product Products
		if err := c.BindJSON(&product); err != nil {
			return
		}

		product.ProductID = uuid.New().String()

		stmt, err := db.Prepare("INSERT INTO products(ProductID, Name, Description, Value, AvailableSale) values(?,?,?,?,?)")

		if err != nil {
			log.Fatal(err)
		}
		_, err = stmt.Exec(product.ProductID, product.Name, product.Description, product.Value, product.AvailableSale)

		if err != nil {
			log.Fatal(err)
		}

		c.IndentedJSON(201, product)
	}
}
