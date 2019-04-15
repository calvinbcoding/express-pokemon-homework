const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//db


// const pokemon = require('./pokemon');

//new route
// app.get('/', );

app.listen(3000, function() {
    console.log('app listening on port: ', 3000);
});

