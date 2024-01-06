import React, { useCallback, useState } from "react";

import Welcome from "../components/Welcome/Welcome";

import { Toast } from "../utils/Alarm";
import { Rest } from "../utils/Rest";

interface Account {
  username: string;
  password: string;
}

interface AccountError {
  username: boolean;
  password: boolean;
}

const LoginPage = () => {
  const [account, setAccount] = useState<Account>({
    username: "",
    password: "",
  });

  const [accountError, setAccountError] = useState<AccountError>({
    username: false,
    password: false,
  });

  const onChangeAccount = useCallback(
    (accountInfo: Partial<Account>) => {
      setAccountError({
        username: false,
        password: false,
      });
      setAccount({
        ...account,
        ...accountInfo,
      });
    },
    [account, setAccount]
  );

  const accountValidation = useCallback(() => {
    const validation = (value: string) => {
      return value && value.length > 5 && /^[a-zA-Z0-9]+$/.test(value);
    };

    const validUsername = validation(account.username);
    const validPassword = validation(account.password);

    if (!validUsername && !validPassword) {
      Toast.error("Enter valid account information");
    } else if (!validUsername) {
      Toast.error("Enter valid username");
    } else if (!validPassword) {
      Toast.error("Enter valid password");
    }

    setAccountError({
      username: !validUsername,
      password: !validPassword,
    });

    return validUsername && validPassword;
  }, [account, setAccountError]);

  const onClickLoginButton = useCallback(() => {
    if (accountValidation()) {
      // TODO request login api and add adminer information to local storage
    }
  }, [accountValidation, account]);

  const onClickGuestButton = useCallback(() => {
    // TODO add guest information to local storage
  }, []);

  return (
    <div className="LoginPage">
      <div className="login-wrapper">
        <Welcome />
        <div className="login-form" onSubmit={() => false}>
          <div className="account-inputs">
            <input type="text" className={["account-input", accountError.username ? "error" : ""].join(" ")} placeholder="Username" maxLength={25} onChange={(e) => onChangeAccount({ username: e.target.value })} />
            <input type="password" className={["account-input", accountError.password ? "error" : ""].join(" ")} placeholder="Password" maxLength={25} onChange={(e) => onChangeAccount({ password: e.target.value })} />
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
