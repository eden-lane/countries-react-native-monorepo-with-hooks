import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Providers} from './Provider';

ReactDOM.render(
  <Providers>
    <App/>
  </Providers>
  , document.querySelector('body')
);
