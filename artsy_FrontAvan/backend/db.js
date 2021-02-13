const mysql = require('mysql')
const doteenv = require('dotenv')
doteenv.config({path: './.env'})

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE, 

});

connection.connect(function(error) {
    if (error) throw error;
    console.log('Database conectado com sucesso!');
  });

module.exports = connection;
