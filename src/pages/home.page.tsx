import { Home } from '../components/home/home';
import styles from './home.page.module.scss';

function HomePage() {
  return (
    <>
      <h2 className={styles['title']}>Top Players List</h2>
      <Home></Home>
    </>
  );
}
export default HomePage;
