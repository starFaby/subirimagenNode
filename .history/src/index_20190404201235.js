const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(multer({
    dest: path.join(__dirname, '/public/uploads')
}). single('image'));

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/upload',(req,res)=>{
    console.log
    res.send('uploaded');
})
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})