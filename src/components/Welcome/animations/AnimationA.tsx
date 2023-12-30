import React from "react";

import "./AnimationA.css"

const AnimationA = () => {
  return (
    <div className="AnimationA">
      <div className="ball"></div>
    </div>
  );
};

export default React.memo(AnimationA);
