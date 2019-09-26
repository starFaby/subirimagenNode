const express = require('express');
const app = express();

app.set('port',3000);
app.set('view')
app.get('/',(req,res)=>{
    res.render();
})
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})