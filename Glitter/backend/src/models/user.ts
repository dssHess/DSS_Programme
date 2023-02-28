import { pgClient  } from "../services/database";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(data: Record<string, unknown>) {
    this.id = data.id as number;
    this.firstName = data.firstName as string;
    this.lastName = data.lastName as string;
    this.username = data.username as string;
    this.password = data.password as string;
  }

  public checkPassword(password: string) {
    return this.password === password;
  }
}

export async function getUserByUsername(username: string) {
  const res = await pgClient.query("SELECT * FROM users WHERE username = $1;",[username])
  if (res.rowCount === 1) {
    return new User(res.rows[0])
  } 
  return undefined
}