import React from "react";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">About</a>
      <a href="/">Profile</a>
      <a href="/">Blog</a>
    </nav>
  );
};

export default React.memo(Menu);

