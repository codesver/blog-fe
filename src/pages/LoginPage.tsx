import React, { useCallback, useEffect, useState } from "react";

import "./LoginPage.css";
import Welcome from "../components/Welcome/Welcome";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [required, setRequired] = useState<boolean>(false);

  const onClickLoginButton = useCallback(() => {
    setRequired(true);
  }, []);

  const onClickGuestButton = useCallback(() => {
    setRequired(false);
  }, []);

  return (
    <div className="LoginPage">
      <div className="login-wrapper">
        <Welcome />
        <div className="login-form" onSubmit={() => false}>
          <div className="account-inputs">
            <input type="text" className="account-input" placeholder="Username" maxLength={25} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="account-input" placeholder="Password" maxLength={25} onChange={(e) => setPassword(e.target.value)} />
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
