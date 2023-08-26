import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadThunk } from '../redux/playersthunks';
import { ApiPlayerRepository } from '../services/api-player-repository';
import { AppDispatch, RootState } from '../store/store';

export function usePlayers() {
  const repo = useMemo(
    () =>
      new ApiPlayerRepository(
        'https://jesus-aa-202307-w6ch5-jesus-alvarez-back.onrender.com/players'
      ),
    []
  );

  const playersState = useSelector((state: RootState) => state.tennisPlayers);
  const dispatch = useDispatch<AppDispatch>();
  const loadPlayers = useCallback(async () => {
    dispatch(loadThunk(repo));
  }, [repo, dispatch]);
  return {
    loadPlayers,
    playersState,
  };
}
