const express = require('express');
const bodyParser = require('body-parser');
const square = require('./square');
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/square',(req,res) => {
    var result = square(req.query.string);
    res.status(200).send({result: result})
});

module.exports = app;