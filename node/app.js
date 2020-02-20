const express = require("express");
const cors = require("cors");

var rp = require("request-promise");

const port = 4000;
const app = express();

const cal = require("./relay-cal");

app.use(cal);

app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//const authDep = require("./../../eventit-auth");

//const auth = authDep(app) // Eanble auth routes

var options = {
  method: "POST",
  uri: "http://localhost:3040/auth",
  body: {
    token: "digit"
  },
  json: true // Automatically stringifies the body to JSON
};

function authenticate(input) {
  return rp(options)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/test", (req, res) => cal.test(app));

app.get("/posttest", (req, res) => {
  let meme = {
    name: "DANK MEMES"
  };
  res.send(meme);
});

app.get("/authtest", (req, res) => {
  authenticate(testToken)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.log(err);
    });
});
function getAllData() {}
