
//// routing modules
var express = require('express');
var wawrouter = express.Router();
var Mailer = require('../mailer.js');  /// link to file that contains mailer configs


/***********  send contact as email  rout ****************/

wawrouter.post('/mailform', function(req, res) {
	 console.log ("------------------------------------")
console.log (req.body) ;
 
   var mailOptions = {
    from: req.body.Email , // sender address
    to: "recieveremail@gmail.com", // list of receivers
    subject: req.body.subject, // Subject line    <div> <strong> </strong> </div>
    //text: text ,//, // plaintext body
   html: ' <div> you got this email from your website through <strong> waw form component </strong> </div> <div> <strong> Sender Name : </strong> '+ req.body.from+' </div> <div> <strong> Sender Email:  </strong> '+ req.body.Email+' </div> <div> <strong>Sender Phone:  </strong> '+req.body.Phone+' </div> <div> <strong> Mail Subject : </strong> '+req.body.subject+' </div> <div> <strong> Mail Body :  </strong> </div> ' + req.body.Message
     };  

     Mailer.sendMail (mailOptions , function (err , msg){
        if(err)  return res.status(500).json({"err": err});
        else return res.status(200).json({"status": "Mail sent"});    
      });  
});

/***********  send contact to database ****************/
wawrouter.post('/dbform', function(req, res) {

    
});




module.exports = wawrouter;
