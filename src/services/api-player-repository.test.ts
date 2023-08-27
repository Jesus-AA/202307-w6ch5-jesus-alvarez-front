import { ApiPlayerRepository } from './api-player-repository';

describe('Given the ApiPlayerRepository Class', () => {
  describe('When it is instantiated', () => {
    const repository = new ApiPlayerRepository('');
    test('The method getAll() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repository.getAll('');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getAll() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      expect(repository.getAll('')).rejects.toThrow();
    });
  });
});

describe('Given the ApiPlayerRepository Class', () => {
  describe('When it is instantiated', () => {
    const repository = new ApiPlayerRepository('');
    test('The method create() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockPlayer = {
        name: 'string',
        nationality: 'string',
        tour: 'string',
        titles: 3,
        prizemoney: 3,
        img: 'string',
      };
      repository.create(mockPlayer);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method create() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockPlayer = {
        name: 'string',
        nationality: 'string',
        tour: 'string',
        titles: 3,
        prizemoney: 3,
        img: 'string',
      };

      expect(repository.create(mockPlayer)).rejects.toThrow();
    });
  });
});

describe('Given the ApiPlayerRepository Class', () => {
  describe('When it is instantiated', () => {
    const repository = new ApiPlayerRepository('');
    test('The method delete() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockid = '1';
      repository.delete(mockid);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method create() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockid = '1';

      expect(repository.delete(mockid)).rejects.toThrow();
    });
  });
});

describe('Given the ApiPlayerRepository Class', () => {
  describe('When it is instantiated', () => {
    const repository = new ApiPlayerRepository('');
    test('The method update() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockPlayer = {
        name: 'string',
        nationality: 'string',
        tour: 'string',
        titles: 3,
        prizemoney: 3,
        img: 'string',
        id: '1',
      };

      repository.update(mockPlayer.id, mockPlayer);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method update() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockPlayer = {
        name: 'string',
        nationality: 'string',
        tour: 'string',
        titles: 3,
        prizemoney: 3,
        img: 'string',
        id: '1',
      };

      expect(repository.update(mockPlayer.id, mockPlayer)).rejects.toThrow();
    });
  });
});
