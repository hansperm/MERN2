const mongoose=require("mongoose");
const UserDetailsSchema = new mongoose.Schema(
    {
        email: {type: String, unique:true},
        fname: String,
        lname: String,
        age:    Number,
        mobile: Number,
        dob: Date,
        password: String
    },
    {
        collection:  "userInfo"
    },
);

mongoose.model("userInfo",UserDetailsSchema);
 
