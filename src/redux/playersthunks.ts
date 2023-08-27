import { createAsyncThunk } from '@reduxjs/toolkit';
import { Player, PlayerWithNoId } from '../model/player';
import { ApiPlayerRepository } from '../services/api-player-repository';

export const loadThunk = createAsyncThunk<Player[], ApiPlayerRepository>(
  'players/load',
  async (repo) => {
    const players = await repo.getAll(
      'https://jesus-aa-202307-w6ch5-jesus-alvarez-back.onrender.com/players'
    );
    return players;
  }
);

export const addThunk = createAsyncThunk<
  Player,
  {
    repo: ApiPlayerRepository;
    player: PlayerWithNoId;
  }
>('players/add', async ({ repo, player }) => {
  const fullPlayer = await repo.create(player);
  return fullPlayer;
});

export const deleteThunk = createAsyncThunk<
  Player['id'],
  {
    repo: ApiPlayerRepository;
    player: Player;
  }
>('players/delete', async ({ repo, player }) => {
  await repo.delete(player.id);
  return player.id;
});

export const updateThunk = createAsyncThunk<
  Player,
  {
    repo: ApiPlayerRepository;
    player: Player;
  }
>('players/update', async ({ repo, player }) => {
  const updatedPlayer = await repo.update(player.id, player);
  return updatedPlayer;
});
