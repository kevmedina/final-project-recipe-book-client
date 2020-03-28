import React, { Component } from "react";
import AUTH_SERVICE from "../services/AuthService";
export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    formSignup: {
      username: "",
      email: "",
      password: ""
    }
  };

  handleSignupInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value
      }
    }));
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.formSignup)
      .then(responseFromServer => {
        console.log("Response from server: ", responseFromServer);
      })
      .catch(err => console.log("Error while signup user: ", err));
  };

  render() {
    const { state, handleSignupInput, handleSignupSubmit } = this;
    return (
      <div>
        <AuthContext.Provider
          value={{
            state,
            handleSignupInput,
            handleSignupSubmit
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default AuthProvider;
