import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './index.css';
import UserProfile from './Components/Profile/Elements/Profile';
import LoginPage from './Components/Login_Page/Elements/Login_Page'
import PersonalCabinet from './Components/Registration_page/Elements/Registration_page';
import UserphotoPageComponent from './Components/user_photos_page/Elements/user_photo_page';
import Homepage from './Components/Homepage(1)/Elements/HomePage'; 
import * as serviceWorker from './serviceWorker';


function UserPhotoPage(){
    return(
        <UserphotoPageComponent />
    )
}

function UserLoginPage(){
        return(
            <LoginPage />
        )
}
function Profile(){
    return(
        <UserProfile />
    );
}
function PersonalCabinetPage(){
        return(
            <PersonalCabinet/>
        );
    
}
function HomePage() {
    return(
        <Homepage />
    );
}

function NavigationRouter(){
    return(
        <Router>
            <Route path = "/register" component= {PersonalCabinetPage} />
            <Route exact={true} path = "/" component ={HomePage} />
            <Route path = "/profile" component = {Profile} />
            <Route path  = "/login"  component = {UserLoginPage} />
            <Route path = "/photos" component = {UserPhotoPage} />
        </Router>   
    );
}

ReactDOM.render(<NavigationRouter />, document.getElementById('main'));

serviceWorker.unregister();
