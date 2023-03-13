const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const AUTH_USER = "AUTH_USER";
const AUTHORIZED = "AUTHORIZED";

let initialState = {
  login: null,
  email: null,
  isAuth: false,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        isAuth: (state.isAuth = true),
        email: (state.email = action.payload.email),
        login: (state.login = action.payload.username),
        id: (state.id = action.payload.id),
      };

    case AUTH_USER:
      return {
        ...state,
        isAuth: (state.isAuth = true),
        email: (state.email = action.payload),
        password: (state.password = action.payload),
      };

    case AUTHORIZED:
      return {
        ...state,
        isAuth: (state.isAuth = action.payload),
      };

    default:
      return state;
  }
};

export const createAccount = (payload) => {
  return {
    type: CREATE_ACCOUNT,
    payload,
  };
};
export const login = (payload) => {
  return {
    type: AUTH_USER,
    payload,
  };
};
export const setAuthorized = (payload) => {
  return {
    type: AUTHORIZED,
    payload,
  };
};

export default authReducer;
