var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../../config/config');

var transport = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `

  var mail = {
    from: email,
    to: 'evencuriouser@gmail.com',  //Change to email address that you want to receive messages on
    subject: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
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