import styles from './TableHeaderActions.module.scss';

type Props = {
  children?: React.ReactNode;
}

const TableHeaderActions = ({ children }: Props) => {

  return (
    <section className={styles.wrapper}>
    <div className={styles.filterContainer}>
    {children}
    </div>
    </section>
  );
};

export { TableHeaderActions };