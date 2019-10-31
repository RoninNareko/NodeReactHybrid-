app.post("/register", urlencodedParser, function (req, res) {   
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
  
    console.log(req.body.username);
  
      let UserData = {  
        username: ''+req.body.username+'',
        email: ''+req.body.email+'', 
        password: ''+req.body.password+'',
        Rank: 'User',
        reg_date: ''+today+'' 
    };
    console.log(today);
  
    connection.execute(
      "INSERT INTO `normaling`.`users` (`id`, `login`, `password`, `email` , `registration_date`, `rank`, `avatar_url`, `user_photo_names`) VALUES ('id', '"+UserData.username+"', '"+UserData.password+"', '"+UserData.email+"', '"+UserData.reg_date+"','"+UserData.Rank+"', '../UserDefaultMaleAvatar.png' , '[]')", 
      function(err, results, fields) {
        if(err){
          console.log(err);
          res.end();
        }
        console.log(results);
        res.end(); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    
        // If you execute same statement again, it will be picked from a LRU cache
        // which will save query preparation time and give better performance
      }
    );
  });