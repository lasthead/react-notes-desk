import { SESSION_CONSTANTS } from '../constants'
import { getUserData, authorizationUserApi, createUserApi } from "../../services/API";

export const logIn = ({ email, password }) => async dispatch => {
  try {
    dispatch({ type: SESSION_CONSTANTS.LOG_IN_START });
    const response = await authorizationUserApi({ email, password });
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

export const userCreate = ({ email, password }) => async dispatch => {
  try {
    dispatch({ type: SESSION_CONSTANTS.LOG_IN_START });
    const response = await createUserApi({ email, password });
    if (response.data.access_token) {
      localStorage.setItem('refreshToken', "Bearer " + response.data.access_token)
    }
    dispatch({
      type: SESSION_CONSTANTS.LOG_IN_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: SESSION_CONSTANTS.CREATE_USER_FAIL, message: error });
    console.log(error);
  }
};

export const setStoreUserData = () => async dispatch => {
  try {
  dispatch({ type: SESSION_CONSTANTS.LOADING });
  const payload = await getUserData();
  dispatch({
    type: SESSION_CONSTANTS.USER_SET_DATA,
    payload: payload.data
  })
  } catch (e) {
    dispatch({ type: SESSION_CONSTANTS.STOP_LOADING });
  }
};


export const logOut = () => {
  localStorage.removeItem('refreshToken');
  return {
    type: SESSION_CONSTANTS.LOG_OUT,
    payload: null
  };
};
