import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(()=>{})}>
      <App />
    </Provider>
    ,document.querySelector('.container'));
