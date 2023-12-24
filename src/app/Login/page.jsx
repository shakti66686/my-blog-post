import React from "react";
import style from "./login.module.css";
const loginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.socialButton}>SignIn with Google</div>
        <div className={style.socialButton}>SignIn with GitHub</div>
        <div className={style.socialButton}>Sign with Facebook</div>
      </div>
    </div>
  );
};

export default loginPage;
