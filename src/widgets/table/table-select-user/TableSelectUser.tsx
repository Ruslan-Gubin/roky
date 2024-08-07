import { redirect } from 'next/navigation';
import { TableInfoSvg } from "@/shared/svg/TableInfoSvg";
import { cookies } from 'next/headers';
import type { UserModel } from "@/shared/api/user-api/types";

import styles from "./TableSelectUser.module.scss";


type Props = {
  user: UserModel;
};

const TableSelectUser = ({ user }: Props) => {

  const handleLinkUser = async() => {
    'use server';
    cookies().set('user-info', JSON.stringify(user));
    redirect(`/${user.location.country}`);
  };

  return (
    <div className={styles.link}>
      <form action={handleLinkUser}>
      <button 
      className={styles.linkItem}>
        <TableInfoSvg />
      </button>
      </form>
    </div>
  );
};

export { TableSelectUser };
