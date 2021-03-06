const express = require('express');
const path = require('path');
const multer = require('multer');


const storage=multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename: (req,file,cb)=>{
        cb(null,file.originalname);//nombre original
    }
})

const app = express();


app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(multer({
    storage: storage,
    dest: path.join(__dirname, '/public/uploads'),
    limits: {fileSize:200000}, //me dice el tamaño del objeto a ingresar
    fileFilter:(req, file, cb)=>{
       const fileTypes = /jpeg|jpeg|png|gif/;
       const mimetype = fileTypes.test(file.mimetype);
       const extname = fileTypes
    }
  
}). single('image'));

//routes
app.use(require('./routes/IndexRoutes'));

app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})