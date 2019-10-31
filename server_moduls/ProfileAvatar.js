const multer = require("multer");
var path = require('path')


const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/path/to/temporary/directory/to/store/uploaded/files"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


app.post(//Pictures of users
  "/upload",
  upload.single("photo" /* name attribute of <file> element in your form */),
  (req, res) => {

    // console.log(req.file);
    // console.log(req.body);
    // console.log(req.body.pagelink);
    var Seacglink = req.body.pagelink.indexOf('profile/');
    console.log( Seacglink );
    var minprofLink = req.body.pagelink.slice(Seacglink).slice(8);
    // console.log(minprofLink);
    UserID = minprofLink;

    fs.mkdir('./client/src/Components/Profile/Pictures of users/User_'+UserID+'', function() {});

    const tempPath = req.file.path;
    const targetPath = path.join("./client/src/Components/Profile/Pictures of users/User_"+UserID+"/image"+Date.now()+ ".png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png" || ".jpg" || ".gif") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        var SeactFolderPhohoindex = targetPath.indexOf("User_"+UserID+"");
        // console.log( SeactFolderPhohoindex );
        var PhotoName = targetPath.slice(SeactFolderPhohoindex).slice(0);
        // console.log(PhotoName +   'photeeeeeeeee\eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        var PhotoDirection = PhotoName.replace('\\', '/');
        
        var dataobj = {
          "PhotoDirective": PhotoName,
        }

        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.send(dataobj);
        res.end();
        console.log('yesss');

          connection.execute(
            "UPDATE users SET avatar_url= ? WHERE id= ?" , [PhotoDirection,UserID], 
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              console.log(targetPath)
              // console.log(fields); // fields contains extra meta data about results, if available
           
              // If you execute same statement again, it will be picked from a LRU cache
              // which will save query preparation time and give better performance
            }
          );


      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);