import { Player, PlayerWithNoId } from '../model/player';
import { ApiPlayerRepository } from '../services/api-player-repository';
import { appStore } from '../store/store';
import { addThunk, deleteThunk, loadThunk, updateThunk } from './playersthunks';

jest.mock('./slice.ts', () => {});

describe('Given the loadThunk', () => {
  test('It should be dispatched', () => {
    const mockRepo = {
      getAll: jest.fn(),
    } as unknown as ApiPlayerRepository;
    appStore.dispatch(loadThunk(mockRepo));
    expect(mockRepo.getAll).toHaveBeenCalled();
  });
});

describe('Given the addThunk', () => {
  test('It should be dispatched', () => {
    const mockAddRepo = {
      create: jest.fn(),
    } as unknown as ApiPlayerRepository;

    const mockPlayer: PlayerWithNoId = {
      name: 'Roger Federer',
      nationality: 'switzerland',
      tour: 'ATP',
      titles: 103,
      prizemoney: 130594339,
      img: 'https://www.pngmart.com/files/22/Roger-Federer-Transparent-PNG.png',
    };
    appStore.dispatch(addThunk({ repo: mockAddRepo, player: mockPlayer }));
    expect(mockAddRepo.create).toHaveBeenCalled();
  });
});

describe('Given the deleteThunk', () => {
  test('It should be dispatched', () => {
    const mockDeleteRepo = {
      delete: jest.fn(),
    } as unknown as ApiPlayerRepository;

    const mockPlayer: Player = {
      name: 'Rafael Nadal',
      nationality: 'spain',
      tour: 'ATP',
      titles: 92,
      prizemoney: 134640719,
      img: 'https://www.pngarts.com/files/5/Rafael-Nadal-PNG-Transparent-Image.png',
      id: '719ea25f30ff47d9afea65fc1430fb20',
    };

    appStore.dispatch(
      deleteThunk({ repo: mockDeleteRepo, player: mockPlayer })
    );
    expect(mockDeleteRepo.delete).toHaveBeenCalled();
  });
});

describe('Given the updateThunk', () => {
  test('It should be dispatched', () => {
    const mockUpdateRepo = {
      update: jest.fn(),
    } as unknown as ApiPlayerRepository;

    const mockPlayer: Player = {
      name: 'Rafael Nadal',
      nationality: 'spain',
      tour: 'ATP',
      titles: 92,
      prizemoney: 134640719,
      img: 'https://www.pngarts.com/files/5/Rafael-Nadal-PNG-Transparent-Image.png',
      id: '719ea25f30ff47d9afea65fc1430fb20',
    };

    appStore.dispatch(
      updateThunk({ repo: mockUpdateRepo, player: mockPlayer })
    );
    expect(mockUpdateRepo.update).toHaveBeenCalled();
  });
});
