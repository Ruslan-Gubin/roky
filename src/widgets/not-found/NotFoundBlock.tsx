import Link from 'next/link';

import styles from './NotFound.module.scss';

const NotFoundBlock = () => {

  return (
    <div className={styles.root}>
      <section className={styles.content}>
      <h6 className={styles.notFoundTitle}>404</h6>
      <h5 className={styles.notFoundSubTitle}>страница не найдена</h5>
      <p className={styles.notFoundText}>страница, на которую вы пытаетесь попасть, не существует или была удалена.</p>
      <h4 className={styles.linkText}>Перейдите на <Link  className={styles.linkGoHome} href={'/'}>Главную страницу</Link></h4>
      </section>
    </div>
  );
};

export { NotFoundBlock };