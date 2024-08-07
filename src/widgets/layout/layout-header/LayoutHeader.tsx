
import styles from './LayoutHeader.module.scss';


const LayoutHeader = () => {

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Roky</h1>
    </header>
  );
};

export  {LayoutHeader};