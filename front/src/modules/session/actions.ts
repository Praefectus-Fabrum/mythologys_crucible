import { loadingActions } from '../loading';
import { sessionActions } from '.';

interface loginActionProps {
  email:string; 
  password:string;
}

export function validateSession() {
  return (dispatch:any) => {
    dispatch(loadingActions.show());
    dispatch(sessionActions.init());
    return new Promise((resolve, reject) => { // TODO: REPLACE BY CHECKSESSION CALL FROM YOUR CURRENT API
      setTimeout(() => {
        // resolve({ id: 123456, name: 'John Doe' });
        reject();
      }, 2000);
    })
      .then((user) => {
        dispatch(sessionActions.success(user));
        dispatch(loadingActions.hide());
        return true;
      })
      .catch(() => {
        dispatch(sessionActions.error("error"));
        dispatch(loadingActions.hide());
        return false;
      });
  };
}

// eslint-disable-next-line no-unused-vars
export function loginAction({ email, password }:loginActionProps, callback: () => void) {
  return (dispatch:any) => {
    dispatch(sessionActions.clearError());

    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => { // TODO: REPLACE BY LOGIN CALL FROM YOUR CURRENT API
      setTimeout(() => {
        resolve({ id: 123456, name: 'John Doe', email });
        // reject();
      }, 1500);
    })
      .then((user) => {
        dispatch(sessionActions.success(user));
        return true;
      })
      .catch((err) => {
        console.error(err);
        dispatch(sessionActions.error('Unknown user/password '));
        if (callback && typeof callback === 'function') {
          callback();
        }
        return false;
      });
  };
}

export function logoutAction() {
  return async (dispatch:any) => {
    dispatch(loadingActions.show());
    setTimeout(() => { // TODO: REPLACE BY LOGOUT CALL FROM YOUR CURRENT API
      dispatch(sessionActions.clear());
      dispatch(loadingActions.hide());
    }, 2000);
  };
}
