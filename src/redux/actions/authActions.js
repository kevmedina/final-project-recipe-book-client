import AUTH_SERVICE from "../../services/AuthService";

export const getUser = () => (dispatch) => {
  AUTH_SERVICE.getUser()
    .then((responseFromServer) => {
      const { user } = responseFromServer.data;
      dispatch({ type: "GET_USER", user });
    })
    .catch((err) => console.log("Error while getting the user: ", err));
};

export const signUpSubmit = () => (dispatch) => {
  e.preventDefault();
  AUTH_SERVICE.signup(this.state.formSignup)
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

export const loginSubmit = () => (dispatch) => {
  e.preventDefault();
  AUTH_SERVICE.login(this.state.formLogin)
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
