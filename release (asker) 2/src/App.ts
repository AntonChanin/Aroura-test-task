import { createElement, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './page/HomePage';

const App = () => {

  return createElement(
    Fragment, { key: 'fragment_1' },
    createElement(Navigation, { key: '0' }),
    createElement(Routes, null,
      createElement(Route, { path: '/', element: createElement(HomePage, { key: 'homePage' }), key: 'homePageRoute' }),
    ),
  );
}

export default App;
