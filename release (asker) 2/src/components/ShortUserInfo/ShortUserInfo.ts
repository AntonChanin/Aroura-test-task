import { createElement, FC } from 'react';
import useAppSelector from '../../hooks/redux';
import { getDecodeURIComponent } from '../../utils/getDecode';

import classes from './ShortUserInfo.module.scss';

type Props = {
  author: string;
}

const ShortUserInfo: FC<Props> = ({ author }) => {
  const { userObj } = useAppSelector((state) => state.users);
  const { name, surname, image } = userObj[author];
  const authorFullName = `${getDecodeURIComponent(name)} ${getDecodeURIComponent(surname)}`
  
  return   createElement(
    'div',
    { className: classes.userInfo },
    createElement('span', { className: classes.userInfoName }, `Author: ${authorFullName}`),
    createElement('img', { className: classes.userInfoAvatar, src: image?.replace('file/', 'filePublic/'), alt: '' }),
  );
};

export default ShortUserInfo;
