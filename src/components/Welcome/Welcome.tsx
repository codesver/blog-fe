import React from "react";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="wrapper">
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default React.memo(Welcome);
