import { pgClient } from "../services/database";

export class Glitt {
  id: number;
  name: number;
  text: string;
  datetime: string;

  constructor(data: Record<string, unknown>) {
    this.id = data.id as number;
    this.name = data.name as number;
    this.text = data.text as string;
    this.datetime = data.datetime as string;
  }

  public async save() {
    const createQueryString = 'INSERT INTO glitts (name, text, datetime) VALUES ($1, $2, $3)';
    const updateQueryString = `UPDATE glitts SET name = $1, text = $2, datetime = $3 WHERE id = ${this.id};`;
    const queryString = this.id ? updateQueryString : createQueryString;
    const res = await pgClient.query(queryString, [this.name, this.text, this.datetime]);
    // console.log(res)
    // this.id = res.rows[0].id;
  }
}

export async function getAllGlitts(): Promise<Array<Glitt>> {
  const res = await pgClient.query("SELECT * FROM glitts;");
  return res.rows.map(g => new Glitt(g))
}