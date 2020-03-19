/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    console.log('running on a server');
    console.log(`running on localhost: ${port}`);
  };
// good from here 3-18-2020
// Dummy API Enpoint 3-15-2020 line 43 in the demo
const fakeData = { // line 44
  animal: 'Lion',
  fact: 'Lions are wild wild animals'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res) {
  res.send(fakeData)
}

const animalData = []; // line 57

app.get('/all', getData) // line 59

function getData(req, res) {
  res.send(animalData)
  //console.log(animalData);
}
// POST ROUTE 3-15-2020 line 66 in the example

app.post('/addAnimal', addAnimal);

function addAnimal(req, res) {
//console.log(req.body);
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  res.send(animalData)
  console.log(animalData)
}

app.get('/test',(req,res)=>{
  res.send("Hi, the server is still working...")
})