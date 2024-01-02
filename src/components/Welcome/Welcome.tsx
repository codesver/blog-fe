import React from "react";

import Animation from "./Animation"

const Welcome = () => {
  return (
    <div className="Welcome">
      <Animation />
    </div>
  );
};

export default React.memo(Welcome);
