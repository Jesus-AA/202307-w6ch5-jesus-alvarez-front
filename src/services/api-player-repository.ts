import { Player, PlayerWithNoId } from '../model/player';

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

  async create(item: PlayerWithNoId): Promise<Player> {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async delete(id: string): Promise<void> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  async update(id: string, item: Partial<Player>): Promise<Player> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
