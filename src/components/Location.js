import React from "react";

const Location = (props) => {
  console.log(props.onWater);
  return <div>Result: {`${props.onWater}`}</div>;
};

export default Location;
