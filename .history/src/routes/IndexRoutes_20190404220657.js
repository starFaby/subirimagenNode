const {Router} =require('express');
const router = Router();
router.get('/',(req,res)=>{
    res.render('index');
})
app.post('/upload',(req,res)=>{
    console.log(req.file)
    res.send('uploaded');
})