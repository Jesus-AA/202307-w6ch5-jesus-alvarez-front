import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import playersReducer from '../redux/slice';

export const appStore = configureStore({
  reducer: {
    tennisPlayers: playersReducer,
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
