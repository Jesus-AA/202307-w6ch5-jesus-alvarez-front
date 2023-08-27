import { Link } from 'react-router-dom';
import { usePlayers } from '../../hooks/usePlayers';
import { Player } from '../../model/player';
import styles from './card.module.scss';

type Props = {
  player: Player;
};

export function Card({ player }: Props) {
  const { deletePlayer } = usePlayers();

  const onClick = () => deletePlayer(player);

  return (
    <li className={styles['card']}>
      <Link to={`/detail/${player.id}`} className={styles['cardPlayer']}>
        <img src={player.img} width="200px"></img>
        <div className={styles['name-div']}>
          <p className={styles['player-name']}>{player.name}</p>
        </div>
      </Link>
      <span role="button" className={styles['delete-button']} onClick={onClick}>
        Remove Player❌
      </span>
    </li>
  );
}
