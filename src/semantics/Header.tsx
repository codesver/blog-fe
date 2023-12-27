import React, { useCallback } from "react";

import "./Semantic.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickBlogIcon = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="Header">
      <div className="blog-icon">
        <img src="/codesver.png" alt="codesver" width={30} height={30} onClick={onClickBlogIcon} />
      </div>
      <h2>Codesver's Developer Blog</h2>
      <div className="blog-menu">
        <button className="menu">Menu</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
