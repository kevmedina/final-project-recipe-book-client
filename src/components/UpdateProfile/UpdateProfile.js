import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import "./UpdateProfile.css";

class UpdateProfile extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formUpdate,
            formUpdate: { username, email },
          } = context.state;
          const { handleProfileUpdate, handleUpdateInput } = context;
          return (
            <div className="update-profile">
              <div className="update-form">
                <form onSubmit={(e) => handleProfileUpdate(e, formUpdate)}>
                  <h2>Update Profile</h2>
                  <div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={username || ""}
                      onChange={handleUpdateInput}
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email"
                      value={email || ""}
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
