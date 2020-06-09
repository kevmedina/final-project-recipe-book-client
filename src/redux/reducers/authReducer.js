const initialState = {
  formSignup: {
    username: "",
    email: "",
    password: "",
  },
  formLogin: {
    username: "",
    password: "",
  },
  formUpdate: {
    username: "",
    email: "",
  },
  currentUser: {},
  isLoggedIn: false,
  message: null,
  loading: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        currentUser: user,
        isLoggedIn: user ? true : false,
        loading: false,
        formUpdate: {
          username: user.username,
          email: user.email,
        },
      };
    case "SIGNUP_INPUT":
      return {
        ...state,
        formSignup: {
          ...state.formSignup,
          [name]: value,
        },
      };
    case "SIGN_UP":
      return {
        ...state,
        formSignup: {
          username: "",
          email: "",
          password: "",
        },
        currentUser: user,
        isLoggedIn: true,
      };
    case "LOGIN_INPUT":
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [name]: value,
        },
      };
    case "LOGIN":
      return {
        ...state,
        formLogin: {
          username: "",
          password: "",
        },
        currentUser: user,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false,
      };
    case "UPDATE_INPUT":
      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          [name]: value,
        },
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        currentUser: user.data,
        formUpdate: {
          username: user.username,
          email: user.email,
        },
      };
    default:
      return state;
  }
};
