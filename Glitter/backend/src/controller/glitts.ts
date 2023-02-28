import { Glitt, getAllGlitts } from "../models/glitt";

export async function getGlitts(request, response) {
  const glitts = await getAllGlitts();
  response.send(glitts);
}

export async function postGlitts(request, response) {
  const glitt = new Glitt(request.body);
  console.log()
  console.log(glitt)
  await glitt.save();
  response.status(201).send(glitt);
}
