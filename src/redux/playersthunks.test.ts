import { ApiPlayerRepository } from '../services/api-player-repository';
import { appStore } from '../store/store';
import { addThunk, deleteThunk, loadThunk } from './playersthunks';

describe('Given loadThunk', () => {
  test('It should be dispatched', () => {
    const mockRepo = { getAll: jest.fn() } as unknown as ApiPlayerRepository;
    appStore.dispatch(loadThunk(mockRepo));
    expect(mockRepo.getAll).toHaveBeenCalled();
  });
});

describe('Given addThunk', () => {
  test('It should be dispatched', async () => {
    const mockRepo = { create: jest.fn() } as unknown as ApiPlayerRepository;
    appStore.dispatch(addThunk(mockRepo));

    expect(mockRepo.create).toHaveBeenCalled();
  });
});

describe('Given deleteThunk', () => {
  test('It should be dispatched', () => {
    const mockRepo = { delete: jest.fn() } as unknown as ApiPlayerRepository;
    appStore.dispatch(deleteThunk(mockRepo));
    expect(mockRepo.delete).toHaveBeenCalled();
  });
});
