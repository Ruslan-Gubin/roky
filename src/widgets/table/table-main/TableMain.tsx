import { TableHeader } from "../table-header/TableHeader";
import { TableFooter } from "../table-footer/TableFooter";
import { EmptyResurse } from "@/shared/ui/empty-resurse/EmptyResurse";
import { ImageMain } from "@/shared/ui/image-main/ImageMain";
import type { UserModel } from "@/shared/api/user-api/types";
import deftPhoto from '../../../../public/defphoto.jpg';
import { TableSelectUser } from "../table-select-user/TableSelectUser";


import styles from "./TableMain.module.scss";


type Props = {
  userList: UserModel[];
};

const TableMain = ({ userList }: Props) => {

  return (
    <>
      {userList.length > 0 && (
        <div className={styles.tableWrapper}>
          <section style={{ minWidth: 1400 }} className={styles.root}>
            <TableHeader
              cellGridColums={
                "100px 180px 150px 220px 150px 150px 90px 110px 1fr "
              }
              headerDescription={[
                "Аватар",
                "Имя",
                "Телефон",
                "Почта",
                "Страна",
                "Регистрация",
                "Возраст",
                "Пол",
              ]}
              headerTilteCellCenter={["Аватар", "Возраст"]}
            />
            <ul className={styles.tableBodyList} style={{ minHeight: "auto" }}>
              {userList.map((user) => (
                <ul key={user.login?.uuid} className={styles.tableBodyItem}>
                  <li className={styles.userItem}>
                    <div className={styles.imgWrapper}>

                  {user.picture?.thumbnail ?
                      <ImageMain
                      src={user.picture.thumbnail ? user.picture.thumbnail :  deftPhoto.src}
                      alt="User Picture"
                      width={"100%"}
                      height={"100%"}
                        className={styles.tableBodyItemImage}
                        />
                        : 
                        <span>No photo</span>
                      }
                    </div>
                    <span
                      title={`${user.name?.first} ${user.name?.last}`}
                      className={styles.userInfo}
                    >
                      {user.name?.first}{' '}
                      {user.name?.last}
                    </span>
                    <span title={user.phone} className={styles.userInfo}>
                      {user.phone}
                    </span>
                    <span title={user.email} className={styles.userInfo}>
                      {user.email}
                    </span>
                    <span
                      title={user.location?.country}
                      className={styles.userInfo}
                    >
                      {user.location?.country}
                    </span>
                    <span
                      title={new Date(
                        user.registered?.date ? user.registered?.date : ''
                      ).toLocaleDateString()}
                      className={styles.userInfo}
                    >
                      {new Date(user.registered?.date ? user.registered?.date : '').toLocaleDateString()}
                    </span>
                    <span
                      title={String(user.dob?.age)}
                      className={`${styles.userInfo} ${styles.textCenter}`}
                    >
                      {user.dob?.age}
                    </span>
                    <span title={user.gender} className={styles.userInfo}>
                      {user.gender === "male" ? "M" : "Ж"}
                    </span>
                      <TableSelectUser user={user} />
                  </li>
                </ul>
              ))}
            </ul>
            <TableFooter />
          </section>
        </div>
      )}

      {/* {!isLoading && userList.length === 0 && !isSearch && (
        <EmptyResurse text="В настоящее время данные отсутствуют" />
      )} */}
      {/* {!isLoading && itemsList.length === 0 && isSearch && onCancelSearch && (
        <div className={styles.emptySearch}>
          <div>По результату поиска данные отсутствуют</div>
          <button onClick={onCancelSearch} className={styles.emptyClearSearch}>
            Отменить поиск
          </button>
        </div>
      )}  */}
    </>
  );
};

export { TableMain };
