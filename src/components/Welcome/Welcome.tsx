import React from "react";

import "./Welcome.css";
import AnimationA from "./animations/AnimationA";

const Welcome = () => {
  return (
    <div className="Welcome">
      <AnimationA />
    </div>
  );
};

export default React.memo(Welcome);
