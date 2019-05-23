const express = require("express"); //needed to launch server
const router = express.Router();
const User = require("../models/User");
//const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
//sendgrid api key
sgMail.setApiKey(process.env.SG);

//app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { from, subject, text } = req.body;
  User.findById(id).then(user => {
    const { email } = user;
    const msg = {
      to: email,
      from,
      subject,
      text
    };
    sgMail.send(msg).then(msg => res.json(msg));
  });
});

module.exports = router;
