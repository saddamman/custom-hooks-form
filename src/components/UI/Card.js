import React from "react";

const Card = (props) => {
  const classes = `card ${props.className}`;
  return (
    <div className={classes}>
      <div className=" card-body">{props.children}</div>
    </div>
  );
};

export default Card;
