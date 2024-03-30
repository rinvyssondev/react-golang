package db

import (
	"database/sql"
	"log"
)

var db *sql.DB

//func CreateTable(db *sql.DB) {
//	sql := ` CREATE TABLE IF NOT EXISTS products (
//	 		ProductID TEXT PRIMARY KEY,
//	 		Name TEXT,
//	 		Description TEXT,
//	 		Value REAL,
//	 		AvailableSale BOOLEAN
//									 		);`
//	_, err := db.Exec(sql)
//	if err != nil {
//		log.Fatal(err)
//	}
//}

func Connection() *sql.DB {
	var err error
	db, err = sql.Open("sqlite3", "./products.db")
	if err != nil {
		log.Fatal(err)
	}

	stmt := `CREATE TABLE IF NOT EXISTS products (
	 		ProductID TEXT PRIMARY KEY,
	 		Name TEXT,
	 		Description TEXT,
	 		Value REAL,
	 		AvailableSale BOOLEAN
									 		);`

	_, err = db.Exec(stmt)
	if err != nil {
		log.Fatal(err, stmt)
	}

	return db
}
