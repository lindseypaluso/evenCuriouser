let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
const creds = require('../../.env');

let transport = {
    host: "smtp-relay.sendinblue.com",
    port: 465,
    secure: true, 
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let subject = req.body.subject
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `

  let mail = {
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