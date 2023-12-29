import React from "react";

import Menu from "./Menu";

const Header = () => {
  return (
    <header className="Header">
      <div className="blog-icon">
        <a href="/">
          <img src="/codesver.png" alt="codesver" width={30} height={30} />
        </a>
      </div>
      <h2>Codesver</h2>
      <Menu />
    </header>
  );
};

export default React.memo(Header);
