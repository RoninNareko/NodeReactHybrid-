const mysql = require("mysql2");

global.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "normaling",
    password: ""
  });
  
  connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
   });
  