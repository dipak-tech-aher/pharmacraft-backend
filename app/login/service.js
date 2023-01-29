const User = require("../models/user.model");
const nodemailer = require('nodemailer');


const logins = {
  Login: async (req) => {
    console.log("reqq..", req.body);
    let result = await User.find({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("rrr..",result)
    if (result.length == 0) {
        const data={
            message:"email and password not matched"
        }
      return data;
    }
    else{
        const data={
            message:"login successful",
            result:result
        }
        return data;
    }
    
  },

  getEmail: async (req) => {

    
        console.log("ree",req.body)
    let result = await User.findOne({email:req.body.email});

    if (result == null) {
        return "nodata";
    }
    return result;
},

resetPass: async (req) => {

    
  console.log("ree",req.body)
  const filter = {"email":req.body.email};
  const update = {"password":req.body.password};
  let result = await User.updateMany(filter, update, {
      multi:true
  });

if (result == null) {
  return "nodata";
}
return result;
},



sendMail: async (req) => {

    
  console.log("ree",req.body)
  
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akankshaantre6@gmail.com',
        pass: '9096523478'
    }
});
 
let mailDetails = {
    from: 'akankshaantre6@gmail.com',
    to: 'dipakaher000@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
  
},
};

module.exports = logins;
