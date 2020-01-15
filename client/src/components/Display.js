// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.

import React from "react";

const Display = props => {
  return (
    <div>
      <div>Strikes: {props.strikes}</div>
      <div>Balls: {props.balls}</div>
    </div>
  );
};

export default Display;
