const express = require('express');
const path = require('path');
const multer = require('multer');


const storage=multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const app = express();


app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(multer({
    storage: storage,
    dest: path.join(__dirname, '/public/uploads'),
   // limits: {fileSize:1} //me dice el tamaño del objeto a ingresar
    
}). single('image'));

//routes
app.use(require('./routes/IndexRoutes'));

app.use(expres)

app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})