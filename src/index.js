import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/app';
import Header from './components/header';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';

import {AUTH_USER} from './actions/types';

//Add middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token){
  store.dispatch({type:AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/feature" component={RequireAuth(Feature)} />
            <Route path="/signout" component={Signout} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    ,document.querySelector('.container'));
