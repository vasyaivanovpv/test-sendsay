import { actionTypes } from '../constants';

const initialState = {
  isLogged: false,
  session: '',
  error: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload.isLogged,
        session: action.payload.session,
        error: '',
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        session: '',
        error: action.payload.errMessage,
      };
    case actionTypes.LOGOUT:
      return { ...state, isLogged: false, session: '', error: '' };
    default:
      return state;
  }
};
export default login;
