import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Given the component Card', () => {
  describe('When it is rendered', () => {
    const newPlayer = {
      name: 'Roger',
      nationality: 'string',
      tour: 'string',
      titles: 1,
      prizemoney: 1,
      id: 'string',
    };
    render(<Card player={newPlayer}></Card>);
    test('The role listitem should be in the document', () => {
      const element = screen.getByRole('listitem');
      expect(element).toBeInTheDocument();
    });
  });
});
