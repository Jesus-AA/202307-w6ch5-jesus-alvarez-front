import { Link } from 'react-router-dom';
import { Home } from '../components/home/home';
import styles from './home.page.module.scss';

function HomePage() {
  return (
    <div className={styles['home-page']}>
      <h2 className={styles['title']}>Top Players List</h2>

      <Home></Home>
      <Link
        role="button"
        id="buttonPlayer"
        className={styles['buttonPlayer']}
        to={'/'}
      >
        Add Player
      </Link>
    </div>
  );
}
export default HomePage;
