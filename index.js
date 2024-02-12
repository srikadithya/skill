const express=require('express')
const cors=require('cors')
const { MongoClient }=require('mongodb')
const bcrypt = require('bcrypt')
const app=new express();
app.use(express.json());
app.use(cors());

const client=new MongoClient('mongodb+srv://admin1:admin1@demo.suzfezo.mongodb.net/?retryWrites=true&w=majority'); 
client.connect();
const db=client.db("skill")
const col=db.collection("user")
app.get('/home', (req,res)=>{
     res.send("it is a home page - newpage-newpage2 ")
})
app.post('/insert',async (req,res)=>{
     req.body.password= await bcrypt.hash(req.body.password,5)
     console.log(req.body);
     col.insertOne(req.body);
     res.send("Data recived")
})
app.listen(8081)
console.log("server running");