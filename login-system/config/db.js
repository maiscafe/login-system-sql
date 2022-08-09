const mysql = require('mysql2');

// create the connection to database
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'system_login',
  })
connection.connect((error) => {
    if(error) {
        console.log("Erro de conexão: " + error);
    }else {
        console.log("Conectado com sucesso a base de dados");
    }
})

module.exports = connection;