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

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
