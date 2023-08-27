import { ApiPlayerRepository } from '../services/api-player-repository';
import { appStore } from '../store/store';
import { loadThunk } from './playersthunks';

describe('Given loadThunk', () => {
  test('It should be dispatched', () => {
    const mockRepo = { getAll: jest.fn() } as unknown as ApiPlayerRepository;
    appStore.dispatch(loadThunk(mockRepo));
    expect(mockRepo.getAll).toHaveBeenCalled();
  });
});
