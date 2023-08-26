import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
  reducer: {
    tennisPlayers: () => {},
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
