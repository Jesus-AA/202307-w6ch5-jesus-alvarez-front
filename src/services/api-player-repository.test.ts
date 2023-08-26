import { ApiPlayerRepository } from './api-player-repository';

describe('Given the ApiPlayerRepository Class', () => {
  describe('When it is instantiated', () => {
    const repository = new ApiPlayerRepository('');
    test('The method getAll() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repository.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getAll() should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      expect(repository.getAll()).rejects.toThrow();
    });
  });
});
