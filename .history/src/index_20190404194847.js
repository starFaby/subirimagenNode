const express = require('express');
const app = express();

app.set('port',3000);
app.get('/',(req,res))
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})