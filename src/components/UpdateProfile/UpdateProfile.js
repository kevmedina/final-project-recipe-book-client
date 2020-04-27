import React from "react";
import { AuthContext } from "../../context/index";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          currentUser,
          message,
        } = context.state;

        const { handleLoginInput, handleProfileUpdate } = context;
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
                    value={currentUser.username}
                    onChange={handleLoginInput}
                  />
                </div>

                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={currentUser.email}
                    onChange={handleLoginInput}
                  />
                </div>

                {/* <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleLoginInput}
                  />
                </div> */}

                {message && <div>{message}</div>}
                <button>Update</button>
              </form>
            </div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default UpdateProfile;
