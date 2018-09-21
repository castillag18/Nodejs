'use strict'

const path = require ('path')
const express = require ('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const app = express();
//const http = require('http') 


//connecting db, Promesas
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('Db connected'))
.catch(err => console.log(err));


//setting
app.set('port', process.env.PORT || 3600);
app.set('Views' , path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

//importing routes
const indexRoutes = require('./Routes/routes');


//middlerwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false }))

//Routes
app.use('/', indexRoutes)

app.listen(app.get('port'), () => {
    console.log(`server iniciado ${app.get('port')}`);
});