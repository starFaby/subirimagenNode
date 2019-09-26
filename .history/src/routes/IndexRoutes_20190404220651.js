const {Router} =require('express');
const router = Router();
app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/upload',(req,res)=>{
    console.log(req.file)
    res.send('uploaded');
})