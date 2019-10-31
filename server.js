global.express = require('express');
global.fs = require('fs');
global.bodyParser = require("body-parser");
global.app = express();
global.session = require('express-session')
global.app.use(bodyParser.urlencoded({ extended: false }));
global.app.use(bodyParser.json());
global.urlencodedParser = bodyParser.urlencoded({extended: false});

//connect moduls
const Mysql_connect = require('./server_moduls/Mysql_connect_settings');
const User_Registration = require('./server_moduls/User_registration');
const User_autorization = require('./server_moduls/user_autorization.js');
const user_profile = require('./server_moduls/User_profile');
const User_profile_avatar = require('./server_moduls/ProfileAvatar');
const User_photos_page = require('./server_moduls/UserPhotosPageFrontend');
//


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);