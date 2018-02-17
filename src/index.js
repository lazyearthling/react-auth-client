import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route,Switch,BrowserRouter} from 'react-router-dom';

import reducers from './reducers';

import App from './components/app';
import Header from './components/header';
import Signin from './components/auth/signin';

//Add middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    ,document.querySelector('.container'));
