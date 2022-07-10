require('dotenv').config()
const express= require('express')
const app =express()
const mongoose = require('mongoose')
const routes = require('./routes') // includes the routes.js file
const cors = require('cors') // includes cors module
const path=require('path')
const cronUpdate= require('./cron')
const cron =require('./cron2')

app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(routes)


app.use(express.static(path.join(__dirname, "Client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});


mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection





db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('database connected')
    cron.performUpdate()
    
    app.listen(process.env.PORT|| 8080,()=>{
        console.log("The API is running on Port:" + process.env.PORT || 8080)
    })
})




