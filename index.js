'use strict'
const path = require('path')
const express = require('express')
const app = express()

const port = 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



// colocar en public las carpetas de style y script
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')

});

app.get('/contactenos', (req, res) => {
    res.render('contact')
});
app.listen(port, () => {
    console.log(`   PUERTO  ${port}`);
});