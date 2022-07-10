//This version is used by either clock or worker in the Procfile for Heroku?
require('dotenv').config();
var cron =require('node-cron');
var nodemailer=require('nodemailer')
const User = require('./models/Emailschema')
const ejs= require('ejs')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

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


function mailTasks(elem,tasks){
  ejs.renderFile(__dirname + "/views/ReminderEmail.ejs", {userName: elem.username, mongoDB: tasks},
  (err,data)=>{
  if (err) console.log(err)
  var mainOptions={
    from: `${sender}`,
    to: `${elem.email}`,
    subject: 'Your reminder ',
    html: data,
  }
  transporter.sendMail(mainOptions,(err,info)=>{
    if (err) console.log(err)
    console.log(info.response)
  })
})
}

db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('database connected')
    cron.schedule('*/10 * * * * *', ()=>{
    let time=new Date();
    let T=time.toISOString();
    let GMT= time.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit',hour12:false})
    console.log(`performing Update on ${time} at ISO:${T} & LocaleTimeString: ${GMT}` )
    User.find({})
        .then(d=>{
          console.log(d)
          return d
        })
        .then(d=>{
          d.forEach(elem=>{
            let overDueItems=elem.log.filter(function(v) { return v.date==T.slice(0,10) && v.time < GMT })
            let now=elem.log.filter(v=>v.date==T.slice(0,10) && v.time==GMT)
            if (now.length>0) mailTasks(elem,now)
            elem.overdue.push(...overDueItems)
            elem.log=elem.log.filter(v=>{return v.date!==T.slice(0,10) || v.time>=GMT  })
          })
            return d 
        })
        .then(d=>User.bulkSave(d))
    })
})









