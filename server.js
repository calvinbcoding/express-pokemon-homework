const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');


//middleware
app.use(morgan('short'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



const Pokemon = require('./db/db');

//index
 app.get('/pokemon', (req, res) => {
    //res.send(Pokemon);
   console.log('index route<----index');
     res.render('index.ejs', {
       pokemon: Pokemon,
      });
  });

  //new-create
  app.get('/pokemon/new', (req, res) => {
    console.log('new.ejs<--- new.ejs route')
    res.render('new.ejs');
  });

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




app.listen(3000, function() {
    console.log('app listening on port: ', 3000);
});

module.exports = app;