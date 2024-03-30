package main

import (
	_ "github.com/mattn/go-sqlite3"
	"log"
	db2 "teste1/db"
	"teste1/router"
)

func main() {

	dbConnection := db2.Connection()
	defer dbConnection.Close()

	r := router.Router(dbConnection)
	err := r.Run(":8080")
	if err != nil {
		log.Fatal(err)
	}
}
