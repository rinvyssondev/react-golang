package router

import (
	"database/sql"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"teste1/models"
)

func Router(db *sql.DB) *gin.Engine {

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AddAllowHeaders("Authorization")
	config.AllowMethods = []string{"GET", "POST"}
	config.AllowHeaders = []string{"Authorization", "Content-Type"}
	router.Use(cors.New(config))

	router.GET("/products", models.GetAllProducts(db))
	router.POST("/products", models.PostProducts(db))

	return router
}
