const express = require('express');
const app = express();
//Variables env
require('dotenv').config();
//Settings body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//PORT
const port = process.env.PORT || 3000;

//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Static files.
app.use(express.static(__dirname + '/public'));

//routes
app.use('/', require('./routes/router.js'));

//Server is listenning.
app.listen(port, () => {
	console.log('Todo esta fino.');
});