require('dotenv').config();
var nodemailer = require('nodemailer');
const ejs= require('ejs')

let sender= process.env.EMAIL
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS,
    clientId: process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN

  },
   tls: {
          rejectUnauthorized: false
      }
});






function mailTasks(){
  ejs.renderFile(__dirname + "/views/TestEmail.ejs", {userName: 'mikey', mongoDB: ['keep going!', 'never give up']},
  (err,data)=>{


    var mainOptions={
      from: sender,
      to: sender,
      subject: 'Testing OAuth tokens',
      html: data,
  }
  transporter.sendMail(mainOptions,(err,info)=>{
    if (err) console.log(err)
    console.log(info.response)
  })
})
}

mailTasks();
