const express = require('express');
const bodyParser = require('body-parser');

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})

app.get('/square',(req,res) => {
    var his_string = req.query.string;
    console.log(his_string);
});

module.exports = app;