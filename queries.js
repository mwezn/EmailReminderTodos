require('dotenv').config()
const User = require('./models/Emailschema')
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

const pullUpdate ={$pull: {log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}] }} }
    const overdue={$pop:{overdue:1}} //removes last element from overdue
    const pushUpdate= {$push:{overdue:{ $in: {log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}]}}}}}
    const findDueLogs={ log: {$and:[ {date: {$eq:T.slice(0,10)}}, {time: {$lt: GMT}}] }}

    User.updateMany(query, pushUpdate)
     .then(result=>{
         console.log(result)
         return result
    })
     .catch(err=>console.log(err))
   
    User.updateMany(query, pullUpdate)
     .then(result=>{
         console.log(result)
         return result
    })
     .catch(err=>console.log(err))
    User.find(findDueLogs)
    .then(result=>{
        console.log(result)
        return result
    })
//These are just various test queries ive experimented with
