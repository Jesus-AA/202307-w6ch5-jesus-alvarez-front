import { createAsyncThunk } from '@reduxjs/toolkit';
import { Player } from '../model/player';
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
