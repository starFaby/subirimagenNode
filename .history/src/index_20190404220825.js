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
    dest: path.join(__dirname, '/public/uploads')
}). single('image'));

//routes
app.use(require('./routes/index'))

app.listen(app.get('port'),()=>{
    console.log(`server online ${app.get('port')}`)
})