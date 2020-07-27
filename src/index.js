import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';
import AsteroidFinder from './AsteroidFinder';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AsteroidFinder />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
