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

// const mapStateToProps = (state) => {
//   return {
//     username: state.authReducer.formUpdate.username,
//     email: state.authReducer.formUpdate.email,
//     formUpdate: state.authReducer.formUpdate,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   handleUpdateInput: (e) => dispatch(handleUpdateInput(e)),
//   handleProfileUpdate: (e, formUpdate) =>
//     dispatch(handleProfileUpdate(e, formUpdate)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);

export default UpdateProfile;
