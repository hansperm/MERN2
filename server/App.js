const e = require("express");
const express = require("express");
const App =express();
App.use(express.json())
const  mongoose=require("mongoose");
const cors = require("cors");
App.use(cors());
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdfsahfdjhghkguytrts2134436%^&$%^@#$!$^%&$*OP{";

//MOngoose ULR
 const mongoUrl = "mongodb+srv://hansel:Oracle_123$1@cluster0.aqvxhdk.mongodb.net/?retryWrites=true&w=majority";

 mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(()=>{console.log("Connect to Database!"); 
})
.catch((e) => console.log(e));



// listen to port 5000
App.listen(5000,()=>{
console.log("Server has started!");
})


// API send request body using postman http://localhost:5000/post
App.post("/post", async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;

// API send response body using postman 

    try {
        if (data=="Hansel"){
            res.send({status:"ok"});
        }
        else {
            res.send({status:"user not found"});
        }

    } catch (error) {
        res.send({status:"error"});
    }

})

//export from UserDetails
require("./UserDetails");

const User = mongoose.model("userInfo");

// API send request body using postman http://localhost:5000/post
App.post("/register", async(req,res)=>{
   // console.log(req.body);
    const {email,fname,lname,age,mobile,dob,password}=req.body;

    // creating encrypted password in DB
    const encryptedPassword = await bcrypt.hash(password,10);

    // API send data body to mongodb 
    try {

        //check for existing email in the DB
       const oldEmail = await User.findOne({email});
        if(oldEmail) {
            
          return  res.send({status:"Email is already available in the database!"});
            
        }
       await User.create({
        email,
        fname,
        lname,
        age,
        mobile,
        dob,
        password : encryptedPassword,
         
       });
        res.send({status:"ok"});
        

    } catch (error) {
        res.send({status:"error"});
    }
})

//login API

App.post("/login-user", async (req, res) => {
 const {email, password } = req.body
 const user = await User.findOne({email});
 
 if(!user) {
            
    return  res.send({status:"User is not found!"});    
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET) ;

    if(res.status(201)) {
        return res.json({status: "ok" , data: token});

    } else {
        return res.json({error: "error!"});

  }
}
return res.json({status: "error" , error: "Invalid Password!"});
})

// Loggedin UserDetails Page

App.post("/user-data", async (req, res) => {
    const token = req.body;
    
try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    user.findOne({email: useremail})
    .then((data) => {
        res.send({status: "ok" , data: data});
        
    })
    .catch ((error) => {
    res.send({status: "error" , data: error});
    });
  
} catch(error) {}

});


 