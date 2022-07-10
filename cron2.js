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

/*"$match" : {
    "stock" : {
       "$elemMatch" : {
          "$and" : [
             { "country" : "01" },
             { "warehouse.code" : "02" }
          ]
       }
    },
}*/




function performUpdate(){
  cron.schedule('*/10 * * * * *', ()=>{
    let time=new Date();
    let T=time.toISOString();
    let GMT= time.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit',hour12:false})
    console.log(`performing Update on ${time} at ISO:${T} & LocaleTimeString: ${GMT}` )
    const pullUpdate ={$pull: {log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}] }} }
    const overdue={$pop:{overdue:1}} //removes last element from overdue
    const pushUpdate= {$push:{overdue:{ $in: {log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}]}}}}}
    const findDueLogs={ log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}] }}

    /*User.updateMany(query, pushUpdate)
     .then(result=>{
         console.log(result)
         return result
    })
     .catch(err=>console.log(err))*/
   
    /*User.updateMany(query, pullUpdate)
     .then(result=>{
         console.log(result)
         return result
    })
     .catch(err=>console.log(err))
  })

  User.find(findDueLogs)
    .then(result=>{
        console.log(result)
        return result
    })
    .catch(err=>console.log(err))*/

    User.find({})
        .then(d=>{
          console.log(d)
          return d
        })
        .then(d=>{
          d.forEach(elem=>{
            elem.overdue = elem.log.filter(function(v) { return v.date==T.slice(0,10) && v.time < GMT })
            elem.log=elem.log.filter(v=>{return v.date!==T.slice(0,10) || v.date==T.slice(0,10) && v.time>GMT})
          })
            return d 
        })
        .then(d=>User.bulkSave(d))
          
          
          //d.Information = d.Information.filter(function(v) { return v.id != 101 })
         // User.save(d)
        
    
})
}
module.exports.performUpdate= performUpdate;
//app.listen(3002);
