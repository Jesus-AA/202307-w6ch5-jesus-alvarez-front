import styles from './App.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Players } from './components/players/players';

function App() {
  return (
    <div className={styles['main-div']}>
      <Header></Header>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
}

export default App;
