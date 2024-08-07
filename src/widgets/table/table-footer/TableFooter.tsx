'use client'
import { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Pagination } from '@/shared/ui/pagination';
import styles from './TableFooter.module.scss';

type Props = {

}

const TableFooter = () => {
  const search = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = search.get('page') ? search.get('page') : '1';


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(search.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [search]
  )


  const handleClickNumberPage = (value: number) => {
    router.push(`${pathname}?${createQueryString('page', String(value))}`)
  }

  const handleChangePage = (direction: 'next' | 'prev') => {
    const directionPage = direction === 'next' ? Number(currentPage) + 1 : Number(currentPage) - 1;
    router.push(`${pathname}?${createQueryString('page', String(directionPage ))}`)
  }



  return (
    <footer className={styles.tableFooterContainer}>
    <div className={styles.paginationContainer}>

        <>
        {currentPage &&
        <Pagination
        totalCount={1000}
        countPerPage={10}
        currentPage={Number(currentPage)}
        clickNumber={handleClickNumberPage}
        nextPage={() => handleChangePage('next')}
        prevPage={() => handleChangePage('prev')}
        />
      }
        </>
        
        </div>
    </footer>
  );
};

export { TableFooter };