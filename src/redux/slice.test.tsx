import { appStore } from '../store/store';

describe('Given the slice', () => {
  test('In the initial state,the players state should be equal to []', () => {
    const state = appStore.getState().tennisPlayers;
    expect(state.players).toEqual([]);
  });
});
