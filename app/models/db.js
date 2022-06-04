const mysql = require('mysql')
const DBConfig = require('../config/db.config.js')
//config DB connection
const connection = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB
})

//open connection
connection.connect(error => {
    if(error) throw error;
    console.log("Connected to DB!");
})

module.exports = connection;