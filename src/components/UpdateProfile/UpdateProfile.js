import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import "./UpdateProfile.css";

class UpdateProfile extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formUpdate: { username, email },
          } = context.state;

          const { handleUpdateInput, handleProfileUpdate } = context;
          return (
            <div className="update-profile">
              <div className="update-form">
                <form onSubmit={handleProfileUpdate}>
                  <h2>Update Profile</h2>
                  <div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={handleUpdateInput}
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={handleUpdateInput}
                    />
                  </div>

                  <button>Update</button>
                </form>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UpdateProfile;
