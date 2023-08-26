import { Player } from '../../model/player';
import styles from './card.module.scss';

type Props = {
  player: Player;
};

export function Card({ player }: Props) {
  return (
    <li className={styles['card']}>
      <img src={player.img} width="200px"></img>
      <div className={styles['name-div']}>
        <p className={styles['player-name']}>{player.name}</p>
      </div>
    </li>
  );
}
