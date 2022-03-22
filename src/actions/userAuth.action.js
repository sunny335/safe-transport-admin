import axios from '../helpers/axios';
import { userAuthConstants } from './constants';

export const Userlogin = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: userAuthConstants.LOGIN_REQUEST });
    const res = await axios.post(`/signin`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem('publicToken', token);
      localStorage.setItem('publicUser', JSON.stringify(user));
      dispatch({
        type: userAuthConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userAuthConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserFormLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('publicToken');
    if (token) {
      const user = JSON.parse(localStorage.getItem('publicUser'));
      dispatch({
        type: userAuthConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: userAuthConstants.LOGIN_FAILURE,
        payload: { error: 'Failed to login' },
      });
    }
  };
};

export const UserFormsignout = () => {
  return async (dispatch) => {
    dispatch({ type: userAuthConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/signout`);
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: userAuthConstants.LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: userAuthConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
