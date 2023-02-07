const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;
const glittsFile = "./glitts.json";

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

function readGlittsFromFile() {
  try {
    const dataBuffer = fs.readFileSync(glittsFile);
    const data = dataBuffer.toString();
    const json = JSON.parse(data);
    return json;
  } catch (e) {
    return [];
  }
}

/**
 * Routes.
 *
 */
app.get("/glitts", (request, response) => {
  const glitts = readGlittsFromFile().reverse();
  response.send(glitts);
});

app.post("/glitts", (request, response) => {
  const glitts = readGlittsFromFile();
  const glitt = new Glitt(request.body);
  glitts.push(glitt);
  fs.writeFileSync(glittsFile, JSON.stringify(glitts));
  response.status(201).send(glitt);
});

/**
 * Start the app.
 *
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
