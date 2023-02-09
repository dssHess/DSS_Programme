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

class User {
  id;
  firstName;
  lastName;
  username;
  password;
}

class Session {
  id;
  user_id;
  token;
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

function postSession(request, response) {
  const {username, password} = request.body;

  if (!username || !password) {
    response.status(400).send("Please enter username and password!");
  }

  // 1. Hole den User aus der Datenbank
  const queryString1 = "select * from users where users.user=$1"
    
  // 2. Wenn der User nicht in der Datenbank drin, gib ein 401 zurück. 
  pgClient.query(queryString1, [username], (err, results) => {
    if (err) {
      response.status(400).send(err.stack);  
    }
    
    if (results.rows.length===0){
      response.status(401).send(err.stack);  
    }

    // 3. Wenn der User in der Datenbank drin, prüfe das Password!
    if (password!==results.rows[0].password){
       response.status(401).send(err.stack); 
      }
  // 4. Wenn das Passwort übereinstimmt, erstelle eine Session (+ token Kryrographisch)
      const session_neu = new Session()
      session_neu.token = "BLUB"
      const queryString2 = "select * from users where password = '$1' "








    pgClient.query(queryString, [username], (err, results) => {
      if (results = "")  {
        response.status(400).send(err.stack);  
      }
        
      response.status(201).send(glitt);
    })
  })

    
  // 5. Speichere die Session.
  // 6. Gib den Token der Session an das Frontend zurück. 
}

/**
 * Routes.
 *
 */
app.get("/glitts", getGlitts);
app.post("/glitts", postGlitts);

app.post("/sessions", postSession);
// app.delete("/session", deleteSession);

// app.get("/sessions/check", checkValidSession);

/**
 * Start the app.
 *
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
