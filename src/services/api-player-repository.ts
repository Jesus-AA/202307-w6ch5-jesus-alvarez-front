import { Player } from '../model/player';

export class ApiPlayerRepository {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(url: string): Promise<Player[]> {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    }
    const data = await request.json();
    return data;
  }
}
