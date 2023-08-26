import { createSlice } from '@reduxjs/toolkit';
import { Player } from '../model/player';
import { loadThunk } from './playersthunks';

export type PlayerState = {
  players: Player[];
  loadState: 'loading' | 'loaded' | 'error' | '';
};

const initialState: PlayerState = {
  players: [],
  loadState: '',
};

const playersSlice = createSlice({
  name: 'players',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadThunk.pending, (state) => {
      state.loadState = 'loading';
    });
    builder.addCase(
      loadThunk.fulfilled,
      (state, { payload }: { payload: Player[] }) => {
        state.players = payload;
        state.loadState = 'loaded';
      }
    );
  },
});

export const actions = playersSlice.actions;
export default playersSlice.reducer;
