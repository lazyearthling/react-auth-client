import axios from 'axios';
import {AUTH_USER,AUTH_ERROR,DEAUTH_USER} from './types';

const ROOT_URL = `http://localhost:3000`;

export function signInUser({email,password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin`,{email,password})
      .then(response => {
        dispatch({type:AUTH_USER})
        localStorage.setItem('token',response.data.token);
      })
      .catch((err) => {
        dispatch(authError("Incorrect Login Details"))
      })
  }
}

export function signUpUser({email,password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`,{email,password})
      .then(response => {
        dispatch({type:AUTH_USER})
        localStorage.setItem('token',response.data.token);
      })
      .catch((err) => {
        dispatch(authError(err.response.data.error))
      })
  }
}

export function signOutUser(){
  localStorage.removeItem('token');
  return{
    type: DEAUTH_USER
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
