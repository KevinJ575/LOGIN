const mysql = require('mysql');
const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password : process.env.DV_PASSWORD,
    database: process.env.DB_DATABASE
})

conection.connect((error) =>{
    if (error) {
        console.error(error);
      } else {
        console.log('Conexión exitosa a la base de datos');
      }
    });

module.exports = conection;