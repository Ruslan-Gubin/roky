import InfoItemValue from "../info-item-value/InfoItemValue";
import { CardMain } from "../info-card-main/CardMain";
import type { UserModel } from "@/shared/api/user-api/types";
import deftPhoto from '../../../../public/defphoto.jpg';
import { ImageMain } from "@/shared/ui/image-main/ImageMain";

import styles from "./UserCardInfoMain.module.scss";


type Props = {
  user: UserModel
}

const UserCardInfoMain = ({ user }: Props) => {



  return (
    <CardMain title="Основная информация пользователя">
      <div className={styles.root}>

        <div className={styles.infoGridLine}>
          <ImageMain 
          height={'100%'}
          width={'100%'}
          className={styles.img}
          src={user.picture.large ? user.picture.large : deftPhoto.src}
          alt="User avatar"
          />
          <div className={styles.firsLineInfo}>

        <InfoItemValue label="имя" value={`${user.name.first} ${user.name.last}`}/>
        <InfoItemValue label="телефон" value={user.phone}/>
        <InfoItemValue label="Почта" value={user.email}/>
          </div>
        </div>
        <InfoItemValue label="возраст" value={user.dob.age}/>
        <InfoItemValue label="пол" value={user.gender === 'female' ? 'Женский' : 'Мужской'}/>
        <InfoItemValue label="Страна" value={user.location.country}/>
        <InfoItemValue label="Город" value={user.location.city}/>
     
      </div>
    </CardMain>
  );
};

export { UserCardInfoMain };
