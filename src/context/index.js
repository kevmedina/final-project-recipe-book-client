import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "../services/AuthService";
export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
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

  componentDidMount() {
    AUTH_SERVICE.getUser()
      .then((responseFromServer) => {
        const { user } = responseFromServer.data;
        this.setState((prevState) => ({
          ...prevState,
          currentUser: user,
          isLoggedIn: user ? true : false,
          loading: false,
          formUpdate: {
            username: user.username,
            email: user.email,
          },
        }));
      })
      .catch((err) => console.log("Error while getting the user: ", err));
  }

  handleSignupInput = (e) => {
    const {
      target: { name, value },
    } = e;

    this.setState((prevState) => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value,
      },
    }));
  };

  handleSignupSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.formSignup)
      .then((responseFromServer) => {
        const {
          data: { user, message },
        } = responseFromServer;

        this.setState((prevState) => ({
          ...prevState,
          formSignup: {
            username: "",
            email: "",
            password: "",
          },
          currentUser: user,
          isLoggedIn: true,
        }));
        console.log(`${message}`);
        this.props.history.push("/user-profile");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            message: err.response.data.message,
          }));
        }
      });
  };

  handleLoginInput = (e) => {
    const {
      target: { name, value },
    } = e;

    this.setState((prevState) => ({
      ...prevState,
      formLogin: {
        ...prevState.formLogin,
        [name]: value,
      },
    }));
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.formLogin)
      .then((responseFromServer) => {
        const {
          data: { user, message },
        } = responseFromServer;

        this.setState((prevState) => ({
          ...prevState,
          formLogin: {
            username: "",
            password: "",
          },
          currentUser: user,
          isLoggedIn: true,
        }));
        console.log(`${message}`);
        this.props.history.push("/user-profile");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            message: err.response.data.message,
          }));
        }
      });
  };

  handleLogout = () => {
    AUTH_SERVICE.logout()
      .then(() => {
        this.setState((prevState) => ({
          ...prevState,
          currentUser: {},
          isLoggedIn: false,
        }));
        this.props.history.push("/");
      })
      .catch((err) => alert("Error while logging out: ", err));
  };

  handleUpdateInput = (e) => {
    const {
      target: { name, value },
    } = e;

    this.setState((prevState) => ({
      ...prevState,
      formUpdate: {
        ...prevState.formUpdate,
        [name]: value,
      },
    }));
  };

  handleProfileUpdate = (e) => {
    e.preventDefault();
    AUTH_SERVICE.updateProfile(this.state.formUpdate)
      .then((user) => {
        this.setState((prevState) => ({
          ...prevState,
          currentUser: user.data,
          formUpdate: {
            username: user.username,
            email: user.email,
          },
        }));
        this.props.history.push("/user-profile");
      })
      .catch((err) => console.log("Error while updating profile", err));
  };

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      handleUpdateInput,
      handleProfileUpdate,
    } = this;
    return (
      <div>
        <AuthContext.Provider
          value={{
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            handleLogout,
            handleUpdateInput,
            handleProfileUpdate,
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withRouter(AuthProvider);
