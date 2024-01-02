import React from "react";

import { useNavigate } from "react-router-dom";

import Header from "../semantics/header/Header";

const MainPage = () => {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <button onClick={() => nav("/login")}>Login</button>
    </>
  );
};

export default React.memo(MainPage);
