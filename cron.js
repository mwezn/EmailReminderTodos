require('dotenv').config();
var cron =require('node-cron');
var express=require('express')
var nodemailer=require('nodemailer')
let app=express();
const User = require('./models/Emailschema')
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


 

// The following function separates users scheduled tasks from the overdue ones!
function performUpdate(){
  cron.schedule('*/30 * * * * *', ()=>{
    let time=new Date();
    let T=time.toISOString();
    let GMT= time.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit',hour12:false})
    console.log(`performing Update on ${time} at ISO:${T} & LocaleTimeString: ${GMT}` )
    User.find( (err,d)=>{
      if (err) console.log(err)
      let l=d.length;
      console.log(d,l)
      for(let i=0;i<l;i++){
        
        let f=d[i].log
        let email= d[i]['email']
        let pastDate=f.filter(z=>z.date<T.slice(0,10))
        let todays=f.filter(z=>z.date==T.slice(0,10))
        let pastTime=todays.filter(z=>z.time<GMT)
        let now=todays.filter(z=>z.time==GMT)
        console.log(email)

        const update = {
          //$pullAll: {overdue:[[]]},
          $pull: {
           log: {
             $in: pastDate
                }
                },
           $addToSet:{overdue:{ $each: pastDate}}
          }
          const update2 ={
            //$pullAll: {overdue:[[]]},
          $pull: {
           log: {
             $in: pastTime
                }
                },
           $addToSet:{overdue:{ $each: pastTime}}

          }
        
        User.findOneAndUpdate(email,update,{new: false}, (err,user)=>{
          /*if(err) console.log(err)
          console.log("User:" +user)*/
        })
        User.findOneAndUpdate(email,update2,{new: false}, (err,user)=>{
          /*if(err) console.log(err)
          console.log("User:"+ user)*/
        })
        
        if(now.length!==0){
          ejs.renderFile(__dirname + "/views/ReminderEmail.ejs", {userName: d[i].username, time: GMT, date: T.slice(0,10), mongoDB: now},
          (err,data)=>{
          if (err) console.log(err)
          var mainOptions={
            from: `${sender}`,
            to: `${d[i].email}`,
            subject: 'Your reminder ',
            html: data,
          }
          transporter.sendMail(mainOptions,(err,info)=>{
            if (err) console.log(err)
            console.log(info.response)
          })
        })


        }
       
        

        

        

    }
    })

})
}
module.exports.performUpdate= performUpdate;
//app.listen(3002);
