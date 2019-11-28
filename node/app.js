const express = require("express");
const cors = require("cors");

var rp = require('request-promise');
const request = require('request');
const axios = require('axios')


const port = 4000; 
const app = express();

app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', (req, res) => res.send('Hello World!'))

app.get('/dbtest',cors(), (req, res) => {
    rp('http://localhost:8080/test')
    .then(function (htmlString) {
        res.send(htmlString)
    })
    .catch(function (err) {
        res.send(err)
    });
})

app.get('/posttest', (req, res) => {
  let meme = {"name": "DANK MEMES"}
  res.send(meme)
   
})



/*request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
*/

 function getAllData(){
    
}

