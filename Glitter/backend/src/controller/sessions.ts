import { getUserByUsername } from "../models/user";
import { createSessionForUser } from "../models/session";

export async function postSession(request, response) {
  const { username, password } = request.body;

  if (!username || !password) {
    response.status(400).send("Please enter username and password!");
  }

  // User
  const user = await getUserByUsername(username);
  if (!user)
    return response.status(401).send("Username or password does not match.");
  if (!user.checkPassword(password))
    return response.status(401).send("Username or password does not match.");

  // Session
  const session = await createSessionForUser(user.id);
  response.status(201).send({ token: session.token });
}
