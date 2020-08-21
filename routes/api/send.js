var express = require("express");
var router =express.Router();
var nodemailer = require("nodemailer");
const creds = require('../config/config.js');


var transport = {
    host: 'smpp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var tranporter = nodemailer.createTransport(transport);
  
  tranporter.verify((error, success) => {
    if(error){
      console.log(error);
    }else {
      console.log('Server is ready to take messages');
    }
  });
  
  router.post('/email', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`
  
    var mail = {
      from: name,
      to: "evencuriouser@gmail.com",
      subject: subject,
      text: content
    }
  
    tranporter.sendMail(mail, (err, data) => {
      if(err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

  module.exports = router;