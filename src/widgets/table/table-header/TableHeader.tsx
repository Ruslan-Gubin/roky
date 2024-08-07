import styles from "./TableHeader.module.scss";

type Props = {
  cellGridColums: string;
  headerDescription?: string[];
  title?: string;
  headerTilteCellCenter?: string[];
};

const TableHeader = ({
  cellGridColums,
  headerDescription,
  headerTilteCellCenter,
}: Props) => {


  return (
    <ul
      style={headerDescription ? { gridTemplateColumns: cellGridColums } : {}}
      className={styles.tableHeaderList}
      >
      {headerDescription &&
        headerDescription.map((item, index) => (
          <li
            className={headerTilteCellCenter && headerTilteCellCenter.includes(item) ? `${styles.headerItem} ${styles.headerItemTextCente}` : styles.headerItem}
            key={`${item}${index}`}
          >
            {item}
          </li>
        ))}
    </ul> 
  );
};

export { TableHeader };
