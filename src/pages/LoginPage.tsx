import React, { useCallback, useState } from "react";

import Welcome from "../components/Welcome/Welcome";

import "./LoginPage.css";
import { Toast } from "../utils/Alarm";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClickLoginButton = useCallback(() => {}, []);

  const onClickGuestButton = useCallback(() => {
    if (!username) {
      Toast.error("Enter your name");
    } else if (username.length < 6) {
    }
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
