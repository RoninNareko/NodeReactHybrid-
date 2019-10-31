var FileNumber;
var UserProfileData;

function SeachSession(Session1, results, FileNumber, UserId){

  if(Session1 === undefined)
  {
    UserProfileData = {
          "username": "",
          "email": "",
          "password":"",
          "rank":"",
          "avatar_url":""+results[0].avatar_url+"",
          "user_photo_names":"",
          "Number_of_photos":"",
          "registration_date":"",
          "session":"no",
        } 
      }
      else
      {
        UserProfileData = {
          "username": ""+results[0].login+"",
          "email": ""+results[0].email+"",
          "password": ""+results[0].password+"",
          "rank":""+results[0].rank+"",
          "avatar_url":""+results[0].avatar_url+"",
          "user_photo_names":""+results[0].user_photo_names+"",
          "Number_of_photos": ""+FileNumber+"",
          "registration_date":""+results[0].registration_date+"",
          "session":"yes",
          "User_photos_personal_link":"http://localhost:3000/photos/"+UserId+""
        }  
    }
}
app.get("/profile/:id", function (req, res) {     

    console.log('account id - ' + req.params.id);
    connection.query(
      'SELECT * FROM `users` WHERE `id` = "'+req.params.id+'"',
      function(err, results, fields,) {
        if(err){
          res.end();
        }
        else if(results.length == 0){
            console.log('Юзер с таким ID линком не наиден,пустой массив данных');
            res.end();
        }
        else{
          var  dir = './client/src/Components/Profile/Pictures of users/User_'+req.params.id+'';
          fs.readdir(dir, (err, files) => {
            if(err){
              console.log('errrorred')
              //http://localhost:3000/photos
              FileNumber = 0;    
              SeachSession(req.session.userPass,results,FileNumber, req.params.id);
              res.setHeader('content-type', 'application/json');
              res.send(UserProfileData);
              res.end();
              console.log(results);
            }
            else
            {
              // function SendData(req, res, numberos){
                FileNumber = files.length;
                SeachSession(req.session.userPass,results,FileNumber, req.params.id);
                res.setHeader('content-type', 'application/json');
                res.send(UserProfileData);
                res.end();
                console.log(results);
            }
          });
          // var UserProfileData = {
          //   "username": ""+results[0].login+"",
          //   "email": ""+results[0].email+"",
          //   "password": ""+results[0].password+"",
          //   "rank":""+results[0].rank+"",
          //   "avatar_url":""+results[0].avatar_url+"",
          //   "user_photo_names":""+results[0].user_photo_names+"",
          //   "Number_of_photos": ""+numberos+"",
          //   "registration_date":""+results[0].registration_date+""
          // }  
          // console.log(UserProfileData.Number_of_photos + 'hahahahahaha')
  
          //   res.send(UserProfileData);
          //   res.end();
          //   console.log(results);
        }
        // console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  });