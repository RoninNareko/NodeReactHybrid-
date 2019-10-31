import React from 'react';
import '../Styles/Styles.css';



class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { 
            username:"",
            userpassword: "",
            email: ""
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event)
    { 
        event.preventDefault();
        fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": this.state.username,
                "email": this.state.email,
                "password": this.state.userpassword
            })
        })
        .then(response => response.json())
        .then(function(data){ 
            console.log(data)
        })
        .catch(function(err) {
            console.log(err)
        }
    )}
    onChangeName(event){ this.setState({username: event.target.value});
    }
    onChangePassword(event){
        this.setState({userpassword: event.target.value});
    }
    onChangeEmail(event){
        this.setState({email: event.target.value});
    }
    render(){
        return(
        <div className="signupSection">
        <div className="info">
            <h2>Mission to Deep Space</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            <p>The Future Is Here</p>
        </div>
        <form onSubmit={this.handleSubmit} className="signupForm">
            <h2>Registration</h2>
            <ul className="noBullet">
            <li>
                <label htmlFor="username"></label>
                <input type="text" className="inputFields" id="username" name="username" 

                placeholder='Username' 
                value={this.state.username} 
                onChange={this.onChangeName}  required/>
            </li>
            <li>
                <label htmlFor="password"></label>
                <input type="password" className="inputFields" id="password" name="password" placeholder="Password"

                value={this.state.userpassword} 
                onChange={this.onChangePassword} 
                 required/>
            </li>
            <li>
                <label htmlFor="email"></label>
                <input type="email" className="inputFields" id="email" name="email" placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.onChangeEmail} 
                        required/>
            </li>  
            <li id="center-btn">
                <input type="submit" id="join-btn" alt="Join" value="Join"/>
                <p><a className='Noprofile' href="/login">Login in</a></p>
            </li>
            </ul>
        </form>
        </div>
        );
    }
}


class Personalization extends React.Component{
    componentDidMount(){
        require('../Js/CabinetNode');
    }
    render(){
        return(
           <div className='Login_Form_Container'>
               <div className='Login_Form_Block'>
                   <LoginForm/>
                </div>   
            </div>   
        );
    }
}
export default Personalization;