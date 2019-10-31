import React from 'react';





class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { 
            username:"",
            userpassword: "",
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event)
    { 
        event.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.userpassword
            })
        })
        .then(response => response.json())
        .then(function(data){ 
            window.location.href='/profile/'+data[0].id+'';
            console.log(data[0].id)
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
    render(){
        return(
            <div className="overlay">

                <form onSubmit={this.handleSubmit}>

                <div className="con">

                <header className="head-form">
                    <h2>Log In</h2>
                
                    <p>login here using your username and password</p>
                </header>

                <br />
                <div className="field-set">
                    

                        <span className="input-item">
                        <i className="fa fa-user-circle"></i>
                        </span>

                        <input className="form-input" id="txt-input" type="text" 
                        placeholder='Username' 
                        value={this.state.username} 
                        onChange={this.onChangeName}  required/>
                    
                    <br/>
                    

                    
                    <span className="input-item">
                        <i className="fa fa-key"></i>
                    </span>

                    <input className="form-input" type="password" placeholder="Password" id="pwd"  name="password"
                        value={this.state.userpassword} 
                        onChange={this.onChangePassword} 
                        required/>
                    

                    <span>
                        <i className="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
                    </span>
                    
                    
                    <br/>

                    <button className="log-in"> Log In </button>
                </div>
                <div className="other">

                    <button className="btn submits frgt-pass">Forgot Password</button>

                    <button className="btn submits sign-up">Sign Up 

                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </button>

                </div>
                </div>
                
                </form>
        </div>
        );
    }
}

class LoginPage extends React.Component{
    componentDidMount(){
        require('../Js/Login.page.min');
        require('../Styles/LoginStyle.css');
    }
    render(){
        return(
            <LoginForm />
        );
    }
}
export default LoginPage;