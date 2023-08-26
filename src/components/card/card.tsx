import { Player } from '../../model/player';

type Props = {
  player: Player;
};

export function Card({ player }: Props) {
  return (
    <li>
      <img></img>
      <div>
        <p>{player.name}</p>
      </div>
    </li>
  );
}
