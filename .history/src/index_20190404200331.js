const express = require('express');
const app = express();
const path = require('path');

app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/upload';)
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})