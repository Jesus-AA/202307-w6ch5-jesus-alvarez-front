import styles from './App.module.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { AppRouter } from './routes/app.routes';

function App() {
  return (
    <div className={styles['main-div']}>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
