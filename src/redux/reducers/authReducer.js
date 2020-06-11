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
        currentUser: action.user,
        isLoggedIn: action.user ? true : false,
        loading: false,
        formUpdate: {
          username: action.user.username,
          email: action.user.email,
        },
      };
    case "SIGNUP_INPUT":
      return {
        ...state,
        formSignup: {
          ...state.formSignup,
          [action.name]: action.value,
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
        currentUser: action.user,
        isLoggedIn: true,
      };
    case "LOGIN_INPUT":
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [action.name]: action.value,
        },
      };
    case "LOGIN":
      return {
        ...state,
        formLogin: {
          username: "",
          password: "",
        },
        currentUser: action.user,
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
          [action.name]: action.value,
        },
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        currentUser: action.user.data,
        formUpdate: {
          username: action.user.username,
          email: action.user.email,
        },
      };
    default:
      return state;
  }
};
