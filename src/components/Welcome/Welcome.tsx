import React from "react";

import Animation from "./animations/Animation"
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="Welcome">
      <Animation />
    </div>
  );
};

export default React.memo(Welcome);
