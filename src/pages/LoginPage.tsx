import React, { useCallback, useState } from "react";

import Welcome from "../components/Welcome/Welcome";

import "./LoginPage.css";
import { Toast } from "../utils/Alarm";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onChangeUsername = useCallback(
    (username: string) => {
      setUsername(username);
      setUsernameError(false);
    },
    [setUsername, setUsernameError]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      setPassword(password);
      setPasswordError(false);
    },
    [setPassword, setPasswordError]
  );

  const usernameValidation = useCallback(() => {
    if (!username) {
      Toast.error("Enter username to login");
      setUsernameError(true);
    } else if (username.length < 6) {
      Toast.error("Username should be longer");
      setUsernameError(true);
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      Toast.error("Only alphabet and number is allowed for username");
      setUsernameError(true);
    }
  }, [username, setUsernameError]);

  const passwordValidation = useCallback(() => {
    if (!password) {
      Toast.error("Enter password to login");
      setPasswordError(true);
    } else if (password.length < 6) {
      Toast.error("Password should be longer");
      setPasswordError(true);
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
      Toast.error("Only alphabet and number is allowed for password");
      setPasswordError(true);
    }
  }, [password, setPasswordError]);

  const onClickLoginButton = useCallback(() => {
    usernameValidation();
    passwordValidation();
    // TODO connect login api
    // TODO move to main page
  }, [usernameValidation, passwordValidation]);

  const onClickGuestButton = useCallback(() => {
    usernameValidation();
    // TODO move to main page
  }, [usernameValidation]);

  return (
    <div className="LoginPage">
      <div className="login-wrapper">
        <Welcome />
        <div className="login-form" onSubmit={() => false}>
          <div className="account-inputs">
            <input type="text" className={["account-input", usernameError ? "error" : ""].join(" ")} placeholder="Username" maxLength={25} onChange={(e) => onChangeUsername(e.target.value)} />
            <input type="password" className={["account-input", passwordError ? "error" : ""].join(" ")} placeholder="Password" maxLength={25} onChange={(e) => onChangePassword(e.target.value)} />
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
