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

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

// Previously we added 2 new props to our ListGroup to make it more flexible
// However, these 2 additional props makes the interface of this component a
// little bit more complex.
// The fewer props we have to pass to our component the easier it is to use.
// To solve this problem we can set the textProperty and valueProperty using
// defaultProps with this we longer have to pass the 2 properties as props to
// this component.

export default ListGroup;
