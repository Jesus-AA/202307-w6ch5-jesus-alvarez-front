import { Link } from 'react-router-dom';
import { IncomingPlayer } from '../../model/player';
import styles from './card.module.scss';

type Props = {
  player: IncomingPlayer;
};

export function Card({ player }: Props) {
  return (
    <li className={styles['card']}>
      <Link to={`/detail/${player.id}`} className={styles['cardPlayer']}>
        <img src={player.img} width="200px"></img>
        <div className={styles['name-div']}>
          <p className={styles['player-name']}>{player.name}</p>
        </div>
      </Link>
    </li>
  );
}
