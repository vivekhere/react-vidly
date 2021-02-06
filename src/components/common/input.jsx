import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

// In this method there are 3 parameters that we specifically need :
// name, label and error

// ALl other attributes we can pass using the rest operator "...rest".
// By using the rest operator we can replace
// value={value} onChange={onChange} type={type}

// Do not remove name={name} because this will not be part of the rest operator.
// The "...rest" parameter includes any other properties other than
// name, label and error.
