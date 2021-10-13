import Counter from '../Counter/Counter';
import styles from './App.module.css';

const App = () => {

  return (
    <div className={styles.app}>

      <div className={styles.header}>
        Header
        <Counter dataKey='header' />
      </div>

      <div className={styles.body}>

        <div className={styles.menu}>
          Menu
          <Counter dataKey='menu' />
        </div>

        <div className={styles.content}>
          Content
          <Counter dataKey='content' />
        </div>

        <div className={styles.ad}>
          Ad
          <Counter dataKey='ad' />
        </div>
      </div>

      <div className={styles.footer}>
        Footer
        <Counter dataKey='footer' />
      </div>

    </div>
  );
};

export default App;