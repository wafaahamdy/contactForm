var nodemailer = require('nodemailer');
var config =require('./config/app.config.js')

//use google as mail server 
     var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.authorEmail , // Your email id
            pass:  config.authorPass // Your password
        }
      }); 
/* // code if i have my own smtp server
      var transporter = nodemailer.createTransport(smtpTransport({
   host: 'localhost',
   port: 25,
   auth: {
       user: 'username',
       pass: 'password'
   }
   }));*/
exports.sendMail = function ( mailOptions , done ){
  
    transporter.sendMail(mailOptions, function(err, info){
     if(err) return done(err);
     
     emailMessage = "Message sent: " + info.response;
     done(null, emailMessage);
      
});// end of send mail 
}