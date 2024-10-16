import React from "react";
import './Loading.css';

import { ThreeCircles } from "react-loader-spinner";
const Loading = ({
  showCircles = true,
}) => {
  return (
    <div className="full-page-center">
      {showCircles && (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      <span className="text">
        Loading...
      </span>
    </div>
  );
};
export default Loading;




