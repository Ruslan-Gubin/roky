import type { ReactNode } from "react";

import styles from './CardMain.module.scss';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
}

const CardMain = ({ title, children, className }: Props) => {

  return (
    <section className={`${styles.root} ${className}`}>
      <header className={styles.header}><h2 className={styles.headerTitle}>{title}</h2></header>
      <section className={styles.content}>{children}</section>
    </section>
  );
};

export { CardMain };