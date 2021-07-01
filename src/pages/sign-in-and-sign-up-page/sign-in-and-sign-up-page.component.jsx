import React from "react";

import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

import "./sign-in-and-sign-up-page.style.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
