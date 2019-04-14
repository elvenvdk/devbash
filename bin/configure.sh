#!/bin/bash

export PGPASSWORD='BioyesBreakfast102938.com';

database="bashdb"
echo "Configuring database: $database"

dropdb -U postgres bashdb
createdb -U postgres bashdb

psql -U postgres bashdb < ./bin/sql/users.sql
psql -U postgres bashdb < ./bin/sql/recruiters.sql

echo "$database was configured"
