
import '../App.css'
import React, {Component} from 'react';
//var window = require('local-storage');


export class UserDetails extends Component {

    
   //invoked immediately after a component is mounted
   componentDidMount() {
     //fetch from node logindetails
      API

     fetch("http://localhost:5000/user-data", {
        method: "POST",
        crossDomain:  true,
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "'",
  
        },
        
         body: JSON.stringify({
          token: window.localStorage.getItem("token"),
  
        }),
      })
      .then((res) => res.json())
    .then((data) => {
        console.log(data,"userData");
        
      });
   }

    

    render()

    {
        return (
    
    <div> 
<main>
<h1>This Is My User Details Page</h1>
  <div class="row">
      <div class="colm-logo">
           
             
             
            
      </div>
      <div>
          <div class="form-container">
          
          
            <img src="../logo512.png" alt="react2" align="right"/>
          </div>
         
      </div>
      
  </div>
</main>
</div> 
    
    );
}
}







