//import { useNavigate} from 'react-router-dom'

//import {useForm} from 'react-hook-form'
//import {yupResolver} from '@hookform/resolvers/yup'
//import * as yup  from 'yup';
import '../App.css';
import React, {Component} from 'react';
//import { set } from 'mongoose';
//import {Validation} from './components/Validations'

export class CreateForm extends Component {

  //create a state props get the value from form 
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      age: "",
      dob: "",
      mobile: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  
  handleSubmit(e) {

    e.preventDefault();
    const{email, fname, lname, age, dob, mobile,password} = this.state;
    console.log(email, fname, lname, age, dob,mobile, password);
    
   
    
    
    

    //fetch from node API

    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain:  true,
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "'",

      },
      
       body: JSON.stringify({
        email,
        fname,
        lname,
        age,
        dob,
        mobile,
        password

      }),
    })
    .then((res) => res.json())
  .then((data) => {
      console.log(data,"userRegister");
      
    })
  }
  
render()

{
    return (
    <div>
       <main>     
        <div class="row">         
                <div class="colm-form">
                <div class="form-container">
                
                  <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input type="text"   placeholder="Email address"  onChange={(e) => this.setState({email: e.target.value})} />
                    <input type="text"  placeholder="First Name" onChange={(e) => this.setState({fname: e.target.value})} />
                    
                    <input type="text"  placeholder="Last Name" onChange={(e) => this.setState({lname: e.target.value})} />
                    
                    <input type="text"  placeholder="Age" onChange={(e) => this.setState({age: e.target.value})} />
                    
                    <input type="text"  placeholder="Mobile Number" onChange={(e) => this.setState({mobile: e.target.value})}  />
                   
                    <input type="date"  placeholder="Date of Birth" onChange={(e) => this.setState({dob: e.target.value})}  />
                    
                    <input type="password"  placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                   
                    <input type="password"  placeholder="Confirm Password" />
                  
                   <input type="submit" id="Submit" />
              
                    </form>                 
                </div>     
              </div>
        </div>
    </main>       
</div>
)}}

/*
  <input type="text"  placeholder="Email address"  onChange={(e) => this.setState({email: e.target.value}) }{...register("email")} />
                  <errorvalid>{errors.email?.message}</errorvalid>

*/


/*
const schema = yup.object().shape({
  email: yup.string().email().required("Valid Email is required!"),
  fname: yup.string().required("Enter your First name"),
  lname: yup.string().required("Enter your Last name"),
 // age: yup.number().positive().integer("Enter valid age"),
 // mobile: yup.number().positive().integer("Enter valid mobile number"),
  password: yup.string().min(4,'Password must be min of 4 characters').max(6, 'Password must be max of 6 characters').required("Password is required!"),
  confirmpas: yup.string().required('Confirm Password is required').oneOf([yup.ref("password")],"Password Dont matched!"),
  age: yup.number().typeError('Age must be a valid number'),
  mobile: yup.number().typeError('Enter a valid Mobile nos'),
  dob: yup.date().typeError('Enter a valid date')
})

const { register, handleSubmit, formState:{errors} ,reset} = useForm({
  resolver: yupResolver(schema),
}) ;

const onSubmit =(data) => {
  console.log(data);
  JSON.stringify(data);
 <p> console.log(data); </p>
  reset();
}
*/