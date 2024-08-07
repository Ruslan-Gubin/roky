import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

type Props = {
  breadcrumbs?: { value: string; href: string | null }[];
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {

  return (
    <div className={styles.root}>
    {breadcrumbs && (
      <ul className={styles.breadcrumb_list}>
        {breadcrumbs.map((breadcrumb, index) => (
          <Link
          className={styles.link}
            key={index}
            href={breadcrumb?.href ?  breadcrumb?.href : ''}
          >
            {breadcrumb.value}
          </Link>
        ))}
      </ul>
    )}
  </div>
  );
};

export { Breadcrumbs };