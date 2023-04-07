//import {useForm} from 'react-hook-form'
import '../App.css';
//import { useNavigate} from 'react-router-dom'
import React, {Component} from 'react';
//var window = require('local-storage');

export class Login extends Component {
//export const Login=() => {
   // const navigate = useNavigate()

  //create a state props get the value from form 
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

    handleSubmit(e) {

      e.preventDefault();
      const{email,password} = this.state;
      console.log(email, password);

    //fetch from node API

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain:  true,
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "'",

      },
      
       body: JSON.stringify({
        email,
        
        password

      }),
    })
    .then((res) => res.json())
  .then((data) => {
      console.log(data,"userLogin");

    // send to login API and alert
      if(data.status==="ok") {
        alert ("Login Successfully")

        //npm install local-storage
        window.localStorage.setItem ("token", data.data);
        window.location.href= "./UserDetails"; 
      }
      
    })
  }
  
render()

{
    return (
    <div> 
      <main>
      
        <div class="row">
            <div class="colm-logo">
                <h1>Zildjian's BOOKFace</h1>
                <h2><font color="red">BOOOKFace</font> helps you connect and share with the people in your life.</h2>
            </div>
            <div class="colm-form">
                <div class="form-container">
                
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email address" onChange={(e) => this.setState({email: e.target.value})}  />
                    <input type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                    <input type="submit" id="Submit" />
                    
                  </form>
                
                </div>
                <p><b>Create a Page</b> At your own risk!</p>
            </div>
        </div>
    </main>
</div>   
)}}





/*

    <button class="btn-new" onClick={() => navigate('/login/register-form')}>Create new Account</button>

*/