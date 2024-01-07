import React from "react";

import Animation from "./Animation"

const Welcome = () => {
  return (
    <div className="Welcome">
      <Animation size={5} />
    </div>
  );
};

export default React.memo(Welcome);
