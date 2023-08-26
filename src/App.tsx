import styles from './App.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

function App() {
  return (
    <div className={styles['main-div']}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
