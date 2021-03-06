import { SESSION_CONSTANTS } from '../constants'

const initialState = {
  user: null,
  errorMsg: '',
  isLoading: false,
  innerPreloader: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SESSION_CONSTANTS.LOG_IN_SUCCESS:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMsg: '',
        isLoading: false
      };
    case SESSION_CONSTANTS.LOG_IN_START:
      return {
        ...state,
        user: null,
        errorMsg: '',
        isLoading: true
      };
    case SESSION_CONSTANTS.LOG_IN_FAIL:
      return {
        ...state,
        errorMsg: 'Login failed',
        isLoading: false
      };
    case SESSION_CONSTANTS.CREATE_USER_FAIL:
      return {
        ...state,
        errorMsg: 'Sign in failed',
        isLoading: false
      };
    case SESSION_CONSTANTS.USER_SET_DATA:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        isLoading: false
      };
    case SESSION_CONSTANTS.LOG_OUT:
      return {
        ...state,
        user: null,
        isLoading: false
      };
    case SESSION_CONSTANTS.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SESSION_CONSTANTS.STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case SESSION_CONSTANTS.INNER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SESSION_CONSTANTS.STOP_INNER_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state
  }
}
