import React, { useCallback } from "react";

import "./Semantic.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="blog-icon">
        <a href="/">
          <img src="/codesver.png" alt="codesver" width={30} height={30} />
        </a>
      </div>
      <h2>Codesver</h2>
      <div className="blog-menu">
        <button className="menu">Menu</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
