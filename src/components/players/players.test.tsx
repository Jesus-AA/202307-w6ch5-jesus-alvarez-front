import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { usePlayers } from '../../hooks/usePlayers';
import { Card } from '../card/card';
import { Players } from './players';

jest.mock('../card/card');
jest.mock('../../hooks/usePlayers');

describe('Given the component Characters', () => {
  const mockLoadPlayers = jest.fn().mockImplementation(() => {
    console.log('Soy un mock de loadPlayers');
  });

  describe('When it is rendered', () => {
    test('the component should be in the document before the data load', () => {
      (usePlayers as jest.Mock).mockReturnValue({
        players: [{ id: 'string' }],
        loadState: 'loading',
        loadPlayers: mockLoadPlayers,
      });
      render(<Players></Players>);
    });
    test('The component should be in the document after the data load', () => {
      (usePlayers as jest.Mock).mockReturnValue({
        players: [{ id: 'string' }],
        loadState: 'loaded',
        loadPlayers: mockLoadPlayers,
      });
      render(<Players></Players>);
      expect(Card).toHaveBeenCalled();
      expect(mockLoadPlayers).toHaveBeenCalled();
    });
  });
});
