const express = require('express');
const app = express();
const path = require('path')

app.set('port',3000);
app.set('view engine','ejs');
app.set('views',pa)
app.get('/',(req,res)=>{
    res.render();
})
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})