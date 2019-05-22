const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan')

// const ejsLint = require('ejs-lint');

//middleware
app.use(morgan('short'));
//app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//db
require('./db/db');

//const Pokemon = require('./db/db');

// //new route
//  app.get('/pokemon', (req,res)=>{
//      console.log('sending pokemon to browser')
//      res.render('create.ejs')
//  } );


 //index
 app.get('/pokemon', (req, res) => {
    //res.send(pokemon);
    console.log('index route');
     res.render('index.ejs', {
       pokemon: Pokemon,
      });
  });

  //new
  app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
  });


  //create
  app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    res.redirect('/pokemon');
  });

//edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
         pokemon: Pokemon[req.params.id],
         id: req.params.id
    });
  //console.log('edit route');
});

    //show
    app.get('/pokemon/:id', (req, res) => {
      res.render('show.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
      });
    });

    //update
    app.put('/pokemon/:id', (req, res) => {
      Pokemon[req.params.id] = req.body;
      res.redirect('/pokemon');
    });

 //delete
    app.delete('/pokemon/:id', (req, res) => {
      Pokemon.splice(req.params.id, 1);
      res.redirect('/pokemon');
    });

//  app.get('show.ejs', (req, res) => {
//      res.send('index.ejs');
//      })
 
       //create route
// app.get('/pokemon', (req, res) => {
//     res.render('index.ejs')
//     })


app.listen(3000, function() {
    console.log('app listening on port: ', 3000);
});

module.exports = app;