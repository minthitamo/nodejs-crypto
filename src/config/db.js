require('dotenv').config()
const { Sequelize } = require('sequelize');
// console.log(process.env)
const mysql = require("mysql2/promise");

let conn = null

// function init connection mysql
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
  };

// use sequenlize
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
  });

module.exports = {
    initMySQL,
    sequelize
};