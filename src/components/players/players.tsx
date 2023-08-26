import { Player } from '../../model/player';
import { Card } from '../card/card';

export function Players() {
  return (
    <div>
      <ul>
        {characters.map((item: Player, index: number) => (
          <Card key={index} player={item}></Card>
        ))}
      </ul>
    </div>
  );
}
