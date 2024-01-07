import React, { useState } from "react";

import Animation from "../Welcome/Animation";

const Header = () => {
  const [scrolled] = useState<boolean>(false);

  return (
    <header className={["Header", scrolled ? "collapse" : "expand"].join(" ")}>
      <Animation size={2} />
      <nav className="menu-wrapper" style={{ display: scrolled ? "none" : "" }}>
        <a href="/">About</a>
        <a href="/">Profile</a>
        <a href="/">Blog</a>
      </nav>
      <div className="login-wrapper">Login</div>
    </header>
  );
};

export default React.memo(Header);
