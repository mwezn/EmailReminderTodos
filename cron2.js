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

const query = {};

//aggregate

/*db.collection_a.aggregate([
    { '$match': { '$and': [ {'t': {'$gte': '21'}}, {'t': {'$lte': '60'}}  ] 
   //, '$or': [ {'s': 'value'} ]
           } 
           ,{ '$or': [ {'s': 'value'} ]}
    }

]);*/




function performUpdate(){
  cron.schedule('*/30 * * * * *', ()=>{
    let time=new Date();
    let T=time.toISOString();
    let GMT= time.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit',hour12:false})
    console.log(`performing Update on ${time} at ISO:${T} & LocaleTimeString: ${GMT}` )
    const update2 ={ $pull: { log: { date: {$eq: T.slice(0,10), time: {$lt: GMT}} }} }
    const customUpdate ={ $pull: { log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}] }} } 
    User.updateMany(query, customUpdate)
     .then(result=>{
         console.log(result)
         return result
    })
     .catch(err=>console.log(err))

})
}
module.exports.performUpdate= performUpdate;
//app.listen(3002);
