// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button onClick={props.handleStrikes}>Strike</button>
      <button onClick={props.handleBalls}>Ball</button>
      <button onClick={props.handleFouls}>Foul</button>
      <button onClick={props.handleHits}>Hit</button>
    </div>
  );
};

export default Dashboard;
