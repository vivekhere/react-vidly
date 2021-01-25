import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// Inorder to remove coupling from our list group we will pass two more pass
// for our properties _id and name.
// With this instead of using the dot notation to access properties we will use
// the bracket notation to access properties dynamically
// With this we will no longer be coupled to genre and we can use this ListGroup
// with any kind of lists.

export default ListGroup;
