import { useParams } from 'react-router-dom';
import { usePlayers } from '../../hooks/usePlayers';
import { Player } from '../../model/player';

export function Detail() {
  const { playersState } = usePlayers();

  const { id } = useParams();

  const character = playersState.players.find(
    (character) => character.id === id
  ) as Player;

  return (
    <div>
      <img src={character.img}></img>
      <div>
        <p>{character.name}</p>
        <p>{character.nationality}</p>
        <p>{character.tour}</p>
        <p>{character.titles}</p>
        <p>{character.prizemoney}</p>
      </div>
    </div>
  );
}
