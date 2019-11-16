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
    console.log("idk man")
    var options = {
        method: 'GET',
        uri: 'http://localhost:8080',
        resolveWithFullResponse: true    //  <---  <---  <---  <---
    };
    rp(options)
    .then(function (htmlString) {
        console.log(htmlString)
    })
    .catch(function (err) {
        // Crawling failed...
    });
})



/*request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
*/

 function getAllData(){
    
}

