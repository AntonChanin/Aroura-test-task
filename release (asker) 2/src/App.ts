import React, { createElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './page/HomePage';

const App = () => {
  return createElement(
    BrowserRouter, { key: '3' },
    createElement(Navigation, { key: '0' },
      createElement(Routes, null,
        [
          createElement(Route, { path: '/', element: React.createElement(HomePage), key: '1' }, null)
        ],
      ),
    ),
  );
}

export default App;
