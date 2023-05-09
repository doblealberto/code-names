package main

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/icrowley/fake"
	"os"
)

func main() {
	// Configure MySQL connection
	cfg := mysql.Config{
		User:                 os.Getenv("DB_USER"),
		Passwd:               os.Getenv("DB_PASSWORD"),
		Net:                  "tcp",
		Addr:                 os.Getenv("DB_HOST"),
		DBName:               os.Getenv("DB_NAME"),
		AllowNativePasswords: true,
	}

	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	stmtIns, err := db.Prepare("INSERT INTO names (name) VALUES(?)")
	if err != nil {
		panic(err.Error())
	}
	defer stmtIns.Close()

	// Insert 50,000 dummy names
	for i := 0; i < 50000; i++ {
		name := fake.FullName()
		_, err = stmtIns.Exec(name)
		if err != nil {
			panic(err.Error())
		}
	}

	fmt.Println("Successfully inserted 50,000 dummy names.")
}
