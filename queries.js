require('dotenv').config()
const User = require('./models/Emailschema')
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection





function performUpdate(){
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
            let overdue=d[i].overdue
            let Id= d[i]['_id']
            let res=f.filter(z=>z.date<T.slice(0,10))
            let res2=f.filter(z=>z.date==T.slice(0,10))
            let pastTime=res2.filter(z=>z.time<GMT)
            let now=res2.filter(z=>z.time==GMT)
        }
    })
}
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('database connected')
    performUpdate()
})
