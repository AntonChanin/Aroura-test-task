import { createElement } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';

const Navigation = () => {
  return createElement('nav', { className: `${classes.nav} ${classes.navConteiner}` }, [
    createElement('h3', { className: classes.fontBold, key: 'link_h3_0' }),
    createElement('span', { className: `${classes.nav} ${classes.navLinkList}`, key: 'span_0' }, [
      createElement(Link, { to: '/', key: 'link_0' }, 'Home'),
      createElement(Link, { to: '/favorites', key: 'link_1' }, 'Favorites'),
    ]),
  ]);
};

export default Navigation;
