const express = require('express');
const app = express();

app.set('port',3000);
app.set
app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})