import '@testing-library/jest-dom';
import { PlayerWithId } from '../../model/player';

const mockPlayers = [
  {
    name: 'Roger',
    nationality: 'Switzerland',
    tour: 'ATP',
    titles: 1,
    prizemoney: 1,
    img: 'url',
    id: 'uno',
  },
] as PlayerWithId[];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'uno',
  }),
}));

describe('Given the component Detail', () => {
  describe('When it is rendered', () => {
    const playerTest = {playerState: {
      players: mockPlayers
    },} as unknown as 
  })
})