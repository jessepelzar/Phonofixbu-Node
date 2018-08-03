

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const PORT = process.env.PORT || 5000;
var AWS = require('aws-sdk');
var app = express();

app.use(express.static(path.join(__dirname, 'src')));
// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index.ejs'));



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
