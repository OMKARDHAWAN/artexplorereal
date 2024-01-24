const express=require("express");
const app=express();
const mongoose=require('./mongoose');

app.use(express.urlencoded({extended:false}));

app.use(express.static('./public'));
app.set("view engine","ejs");
app.get("/home",(req,resp)=>{
    resp.render('home');
})
app.get("/product",(req,resp)=>{
    resp.render('product');
})
app.get("/form", (req,resp)=>{
    resp.render('form');
    
    resp.send("data inserted sucessfully.......")
})
app.get("/bottle",(req,resp)=>{
    resp.render('bottle');
})
app.get("/kingfisher",(req,resp)=>{
    resp.render('kingfisher');
})
app.get("/kundi",(req,resp)=>{
    resp.render('kundi');
})
app.get("/product1",(req,resp)=>{
    resp.render('product');
})
app.get("/QUEEN",(req,resp)=>{
    resp.render('QUEEN');
})
app.get("/tshirt",(req,resp)=>{
    resp.render('tshirt');
})
app.get("/warali",(req,resp)=>{
    resp.render('warali');
})
app.get("/wallart",(req,resp)=>{
    resp.render('wallart');
})





app.post('/form',async (req,resp)=>{
    try{

        const insertedata= new mongoose({
            firstname:req.body.fname,
            address:req.body.address,
            mobileno:req.body.mobileno,
            desciption:req.body.desciption
        })
        const data=await insertedata.save();
        if(!data){
            
            resp.send("data not inserted");
        }else
        {
    resp.send("message recived")
 }       
      }catch(err){
          resp.status(404).send("error occurs");
      }
})

app.listen((5500),()=>{
    console.log("server is running....");
})