import { SyntheticEvent } from 'react';
import { usePlayers } from '../../hooks/usePlayers';
import { PlayerWithNoId } from '../../model/player';
import styles from './form.module.scss';

export function Form() {
  const { addPlayer } = usePlayers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;

    const newPlayer: PlayerWithNoId = {
      name: (formElement.elements.namedItem('name') as HTMLFormElement).value,
      nationality: (
        formElement.elements.namedItem('nationality') as HTMLFormElement
      ).value,
      tour: (formElement.elements.namedItem('tour') as HTMLFormElement).value,
      titles: (formElement.elements.namedItem('titles') as HTMLFormElement)
        .value,
      prizemoney: (
        formElement.elements.namedItem('prizemoney') as HTMLFormElement
      ).value,
      img: (formElement.elements.namedItem('img') as HTMLFormElement).value,
    };
    console.log(newPlayer);
    addPlayer(newPlayer);
  };

  return (
    <form role="form" action="" onSubmit={handleSubmit}>
      <h2>Add your favorites players!</h2>
      <div>
        <input type="text" name="name" placeholder="Player name" required />
        <input type="text" name="nationality" placeholder="Country" required />
        <div className={styles['tour']}>
          <div className={styles['tour-ATP']}>
            <input
              type="radio"
              name="tour"
              id="ATP"
              className={styles['radioInputATP']}
            />
            <label htmlFor="masc">ATP</label>
          </div>
          <div className={styles['tour-WTA']}>
            <input
              type="radio"
              name="tour"
              id="WTA"
              className={styles['radioInputWTA']}
            />
            <label htmlFor="masc">WTA</label>
          </div>
        </div>
        <input type="number" name="titles" placeholder="Titles" required />
        <input
          type="number"
          name="prizemoney"
          placeholder="Prize Money"
          required
        />
        <input type="text" name="img" placeholder="Picture url" required />
      </div>
      <button type="submit">Add Player</button>
    </form>
  );
}
