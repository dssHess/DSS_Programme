import express from "express";
import cors from "cors";

import { getGlitts, postGlitts } from "./controller/glitts";
import { postSession } from "./controller/sessions";

const app = express();
const port = 4000;


/**
 * App middlewares.
 *
 */
app.use(cors());
app.use(express.json());

function ensureAuthenticated(request, response, next) {
  next();
}

/**
 * Routes.
 *
 */
app.get("/glitts", ensureAuthenticated, getGlitts);
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
