import { createSlice } from '@reduxjs/toolkit';
import { IncomingPlayer } from '../model/player';
import { loadThunk } from './playersthunks';

export type PlayerState = {
  players: IncomingPlayer[];
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
      (state, { payload }: { payload: IncomingPlayer[] }) => {
        state.players = payload;
        state.loadState = 'loaded';
      }
    );
  },
});

export const actions = playersSlice.actions;
export default playersSlice.reducer;
