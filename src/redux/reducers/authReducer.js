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
        ...prevState,
        currentUser: user,
        isLoggedIn: user ? true : false,
        loading: false,
        formUpdate: {
          username: user.username,
          email: user.email,
        },
      };
    case "SIGN_UP":
      return {
        ...prevState,
        formSignup: {
          username: "",
          email: "",
          password: "",
        },
        currentUser: user,
        isLoggedIn: true,
      };
    case "LOGIN":
      return {
        ...prevState,
        formLogin: {
          username: "",
          password: "",
        },
        currentUser: user,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...prevState,
        currentUser: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
