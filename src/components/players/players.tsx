import { useEffect } from 'react';
import { usePlayers } from '../../hooks/usePlayers';
import { IncomingPlayer } from '../../model/player';
import { Card } from '../card/card';
import styles from './players.module.scss';

export function Players() {
  const { loadPlayers, playersState } = usePlayers();

  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  return (
    <div className={styles['ul-div']}>
      <ul className={styles['main-ul']}>
        {playersState.players.map((item: IncomingPlayer, index: number) => (
          <Card key={index} player={item}></Card>
        ))}
      </ul>
    </div>
  );
}
