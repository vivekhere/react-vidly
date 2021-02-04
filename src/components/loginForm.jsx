import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // prevent submission of form to the server

    // call the server -> save the changes -> redirect the user to different page.
    // For just log 'Submitted'
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// If you click on the login button, you will see that the page goes for a full
// reload. This is not the kind of behaviour we want see, right ?

// To fix this
// Every form element has a event called onSubmit.
// We will raise this event and handle it.
// We will set this to a handler (handleSubmit) and set it to a function that
// takes an event object (e) as an argument.
// This event has an object preventDefault(), this prevents the default
// behaviour of this event. In this case submiting the form to a server which
// causes full page reload.
