import React, { useCallback, useEffect, useState } from "react";

import "./LoginPage.css";
import Welcome from "../components/Welcome/Welcome";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeAccountInfo = (type: "ID" | "PW", info: string) => {
    if (type === "ID") {
      setUsername(info);
    } else if (type === "PW") {
      setPassword(info);
    }
  };

  const onClickLoginButton = useCallback(() => {}, []);

  const onClickGuestButton = useCallback(() => {}, []);

  return (
    <div className="LoginPage">
      <div className="login-wrapper">
        <Welcome />
        <div className="login-form" onSubmit={() => false}>
          <div className="account-inputs">
            <input type="text" className="account-input" placeholder="Username" maxLength={25} onChange={(e) => onChangeAccountInfo("ID", e.target.value)} />
            <input type="password" className="account-input" placeholder="Password" maxLength={25} onChange={(e) => onChangeAccountInfo("PW", e.target.value)} />
          </div>
          <div className="account-buttons">
            <button className="account-button" onClick={onClickLoginButton}>
              Login
            </button>
            <button className="account-button" onClick={onClickGuestButton}>
              Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LoginPage);
