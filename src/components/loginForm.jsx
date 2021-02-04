import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  // this will create a Ref object
  // in the input element set the Ref attribute to this.username

  // just an example to use the ref object username
  // componentDidMount() {
  //   this.username.current.focus();
  //   // this will focus the username input field.
  //   // But there is a better method. We could use the autofocus attribute
  //   // in the input field.
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    // const username = document.getElementById("username").value;
    // Now, instead of working with document we will work with -
    const username = this.username.current.value;
    // this Ref a property 'current' which returns the actual DOM element

    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
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

// When submitting the form we need the value of the input fields.
// In plain or vanilla js we can get the value of the input field using
// document.getELementById('username) - returns an input field
// tp get the value of the input field add .value at the end.
// But this is not how we should access DOM elements in React.

// In React applications we should never work with the document object because
// the whole point of React is to put an abstraction over DOM so that we don't
// work with that directly and with this our applications will be easier to
// maintain and easier to unit test.

// Inorder to access the username element we need to give it a reference (Refs).
// But when building a form there is a better way which we will discuss next.
