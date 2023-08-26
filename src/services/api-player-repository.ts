import { Player } from '../model/player';
import { SimpleRepository } from './repository';

export class ApiPlayerRepository implements SimpleRepository<Player> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Player[]> {
    const request = await fetch(this.urlBase);
    if (!request.ok) {
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    }
    const data = await request.json();
    return data;
  }
}
