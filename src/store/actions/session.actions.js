import { SESSION_CONSTANTS } from '../constants'
import { getUserData, authorizationUser } from "../../utils/API";

export const logIn = ({ email, password }) => async dispatch => {
  try {
    dispatch({ type: SESSION_CONSTANTS.LOG_IN_START });
    const response = await authorizationUser({ email, password });
    if (response.data.access_token) {
      localStorage.setItem('refreshToken', "Bearer " + response.data.access_token)
    }
    dispatch({
      type: SESSION_CONSTANTS.LOG_IN_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: SESSION_CONSTANTS.LOG_IN_FAIL, message: error });
    console.log(error);
  }
};

export const setUserData = () => async dispatch => {
  dispatch({ type: SESSION_CONSTANTS.LOADING });
  const payload = await getUserData();
  dispatch({
    type: SESSION_CONSTANTS.USER_SET_DATA,
    payload: payload.data
  })
};


export const logOut = () => {
  console.log(localStorage.getItem('refreshToken'));
  localStorage.removeItem('refreshToken');
  console.log(localStorage.getItem('refreshToken'));

  return {
    type: SESSION_CONSTANTS.LOG_OUT,
    payload: null
  };
};
