import { createSlice } from '@reduxjs/toolkit';
import { Player } from '../model/player';
import { addThunk, deleteThunk, loadThunk, updateThunk } from './playersthunks';

export type PlayerState = {
  players: Player[];
  loadState: 'loading' | 'loaded' | 'error' | '';
  error: Error | null;
};

const initialState: PlayerState = {
  players: [],
  loadState: '',
  error: null,
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
    builder.addCase(
      addThunk.fulfilled,
      (state, { payload }: { payload: Player }) => {
        state.players.push(payload);
      }
    );
    builder.addCase(addThunk.rejected, (state) => {
      const error = new Error('Error creating player');
      state.loadState = 'error';
      state.error = error;
    });
    builder.addCase(
      deleteThunk.fulfilled,
      (state, { payload }: { payload: Player['id'] }) => {
        state.players = state.players.filter((item) => {
          item.id !== payload;
        });
      }
    );
    builder.addCase(deleteThunk.rejected, (state) => {
      const error = new Error('Error deleting notes');
      state.loadState = 'error';
      state.error = error;
    });
    builder.addCase(
      updateThunk.fulfilled,
      (state, { payload }: { payload: Player }) => {
        state.players = state.players.map((item) =>
          item.id === payload.id ? payload : item
        );
      }
    );
    builder.addCase(updateThunk.rejected, (state) => {
      const error = new Error('Error updating notes');
      state.loadState = 'error';
      state.error = error;
    });
  },
});

export const actions = playersSlice.actions;
export default playersSlice.reducer;
