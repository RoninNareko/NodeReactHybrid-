var secretValue = 'secret value';
// Функция 'express-session' принимает конфигурационный объект
app.use(session({
   
      cookie: {
        Date  : new Date(Date.now() + 86400000), //7 days
        expires : new Date(Date.now() + 86400000), //7 days
    },
    // если true, сохраняет сеанс в хранилище заново, даже если запрос не изменялся
    resave : false,
    // если установленно значение true, приложение сохраняет новые данные, даже если они не менялись
    saveUninitialized : false,
    // ключ используемый для подписания cookie файла (идентификатора сеанса)
    secret: secretValue
}));

app.post("/login" , urlencodedParser, function (req, res) {
    var userpass = req.body.password;
    connection.query(
      'SELECT * FROM `users` WHERE `login` = "'+req.body.username+'" AND `password` = "'+req.body.password+'"',
      function(err, results, fields,) {
        if(err){
          console.log(err.status);
          res.end();
        }
        else if(results.length == 0){
            console.log('Юзер не наидет/ пустой массив данных');
            res.end();
        }
        else{

          if(!req.session.flag){
            console.log('Set Session');
            // Записываем данные в сессию
            req.session.userName = results[0].login;
            req.session.userPass = results[0].password;
            req.session.flag = true;
          }
          console.log(req.session.userName);
          console.log(req.session.userPass);

          console.log(results);
            res.send(results);
            res.end();
        }
        // console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  });