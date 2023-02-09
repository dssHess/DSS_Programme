const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = 4000;
const pgClient = new Client({
  user: "postgres",
  database: "glitter",
  password: "postgres",
  port: 5432,
  host: "localhost"
})

pgClient.connect();

/**
 * App middlewares.
 *
 */
app.use(cors());
app.use(express.json());

/**
 * Classes.
 *
 */
class Glitt {
  user;
  text;
  datetime;

  constructor(data) {
    this.user = data.user;
    this.text = data.text;
    this.datetime = data.datetime;
  }
}

/**
 * Handler.
 * 
 * @param {*} request 
 * @param {*} response 
 */
function getGlitts(request, response) {
  pgClient.query("SELECT * FROM glitts;", (err, results) => {
    const glitts = []
    results.rows.forEach(g => glitts.push(new Glitt(g)))
    response.send(glitts);
  })
}

function postGlitts(request, response) {
  const glitt = new Glitt(request.body);
  console.log(glitt)
  
  const queryString = "INSERT INTO glitts (\"user\", text, datetime) VALUES ($1, $2, $3)"
  pgClient.query(queryString, [glitt.user, glitt.text, glitt.datetime], (err, results) => {
    if (err) {
      response.status(400).send(err.stack);
    }
      response.status(201).send(glitt);
  })
}

/**
 * Routes.
 *
 */
app.get("/glitts", getGlitts);
app.post("/glitts", postGlitts);

/**
 * Start the app.
 *
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
