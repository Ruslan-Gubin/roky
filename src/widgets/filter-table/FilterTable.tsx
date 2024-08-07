"use client";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FormEventHandler, useCallback, useEffect, useRef, useState } from "react";
import { FilterSvg } from "./FilterSvg";

import styles from "./FilterTable.module.scss";


const FilterTable = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
  
  const search = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentSearch = search.get('search');

  const [searchValue, setSearchValue] = useState(currentSearch ? currentSearch : '');


  const handleToggleFilter = () => setIsOpen((prev) => !prev);

  const clickOutside = (e: MouseEvent) => {
    if (!filterRef.current) return;
    if (!filterRef.current.contains(e.target as Node)) {
      setIsOpen(() => false);
    }
  };

  useEffect(() => {
    if (!filterRef.current || !isOpen) return;
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isOpen]);



  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(search.toString());
      params.set(name, value);
 
      return params.toString()
    },
    [search]
  )

  const handleSubmitFilter: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (searchValue.length === 0) return;

      setIsActive(() => true);
      setIsOpen(() => false);
      router.push(`${pathname}?${createQueryString('search', String(searchValue))}`);
  };

  const handleCancelFilter = () => {
    setIsOpen(() => false);
    setIsActive(() => false);
    setSearchValue(() => '');
    
    const currentPage = search.get('page');

    router.push(`${pathname}?page=${currentPage ? currentPage : '1'}`);
  };

  return (
    <div ref={filterRef} className={styles.root}>
      <button
        type="button"
        className={styles.button}
        onClick={handleToggleFilter}
      >
        <FilterSvg active={isActive || isOpen} />
        <span className={styles.filtersLabel}>ПОИСК</span>
      </button>

      {isOpen && (
        <form
          style={{ top: 35 }}
          onSubmit={handleSubmitFilter}
          className={styles.filterContent}
        >
          <div>
            <label className={styles.filterLabel}>
              {"Введите имя"}
              <input
                className={styles.filterInput}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.footerButtons}>
            <button
              type="reset"
              onClick={handleCancelFilter}
              className={styles.cancelButton}
            >
              Сброс
            </button>
            <button type="submit" className={styles.searchButton}>
              Поиск
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export { FilterTable };
