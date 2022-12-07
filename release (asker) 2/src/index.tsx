import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import './index.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);

root.render(
  createElement(Provider,
    {
      store,
      key: 'storeProvider',
      children:
        createElement(
          BrowserRouter, { key: '3' },
          createElement(App, {}, null)
        ),
    },
  ),
);