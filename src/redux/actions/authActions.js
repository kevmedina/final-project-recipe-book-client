import AUTH_SERVICE from "../../services/AuthService";

export const getUser = () => (dispatch) => {
  AUTH_SERVICE.getUser()
    .then((responseFromServer) => {
      const { user } = responseFromServer.data;
      dispatch({ type: "GET_USER", user });
    })
    .catch((err) => console.log("Error while getting the user: ", err));
};

export const handleSignupInput = (e) => (dispatch) => {
  const {
    target: { name, value },
  } = e;
  dispatch({ type: "SIGNUP_INPUT", name, value });
};

export const handleSignupSubmit = (e, formSignup) => (dispatch) => {
  e.preventDefault();
  AUTH_SERVICE.signup(formSignup)
    .then((responseFromServer) => {
      const {
        data: { user, message },
      } = responseFromServer;
      dispatch({ type: "SIGN_UP", user, message });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        console.log(err);
      }
    });
};

export const handleLoginInput = (e) => (dispatch) => {
  const {
    target: { name, value },
  } = e;
  dispatch({ type: "LOGIN_INPUT", name, value });
};

export const handleLoginSubmit = (e, formLogin) => (dispatch) => {
  e.preventDefault();
  console.log("Form login: ", formLogin);
  AUTH_SERVICE.login(formLogin)
    .then((responseFromServer) => {
      const {
        data: { user, message },
      } = responseFromServer;

      dispatch({ type: "LOGIN", user, message });
      console.log(`${message}`);
      this.props.history.push("/user-profile");
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        console.log(err);
      }
    });
};

export const logout = () => (dispatch) => {
  AUTH_SERVICE.logout()
    .then(() => {
      dispatch({ type: "LOGOUT" });
      this.props.history.push("/");
    })
    .catch((err) => alert("Error while logging out: ", err));
};

export const handleUpdateInput = (e) => (dispatch) => {
  const {
    target: { name, value },
  } = e;
  dispatch({ type: "UPDATE_INPUT", name, value });
};

export const updateProfile = (e, formUpdate) => (dispatch) => {
  e.preventDefault();
  AUTH_SERVICE.updateProfile(formUpdate)
    .then((user) => {
      dispatch({ type: "UPDATE_PROFILE", user });
      this.props.history.push("/user-profile");
    })
    .catch((err) => console.log("Error while updating profile", err));
};
