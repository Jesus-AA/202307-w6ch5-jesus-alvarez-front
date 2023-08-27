import { useParams } from 'react-router-dom';
import { usePlayers } from '../../hooks/usePlayers';
import { IncomingPlayer } from '../../model/player';
import styles from './detail.module.scss';

export function Detail() {
  const { playersState } = usePlayers();

  const { id } = useParams();

  const character = playersState.players.find(
    (character) => character.id === id
  ) as IncomingPlayer;

  return (
    <div className={styles['main-detail-div']}>
      <img className={styles['image']} src={character.img} width="350px"></img>
      <div className={styles['sec-detail-div']}>
        <p>Name: {character.name}</p>
        <p>Country: {character.nationality}</p>
        <p>Tour: {character.tour}</p>
        <p>Titles: {character.titles}</p>
        <p>Prize Money: ${character.prizemoney} </p>
      </div>
    </div>
  );
}
