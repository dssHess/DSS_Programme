import { pgClient } from "../services/database";

export class Session {
  id: number;
  user_id: number;
  token: string;

  constructor (data: Record<string, unknown>) {
    this.id = data.id as number;
    this.user_id = data.user_id as number;
    this.token = data.token as string;
  }
}

export async function createSessionForUser(user_id: number) {
  const token = (Math.random() + 1).toString(36);
  const res = await pgClient.query(
    "INSERT INTO sessions (user_id, token) VALUES ($1, $2);",
    [user_id, token]
  );
  return new Session(res.rows[0])
}
