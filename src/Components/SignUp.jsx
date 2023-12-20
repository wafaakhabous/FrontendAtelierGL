import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/util.css';
import '../css/main.css'

const SignUp = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Sign Up</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
              />
              <span className="focus-input100 "></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="email"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Confirmer Password"
              />
              <span className="focus-input100"></span>
            </div>

           

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Sign Up</button>
            </div>

            <div className="flex-col-c p-t-170 p-b-40">
              <span className="txt1 p-b-9">already have an account?</span>

              <a href="Login" className="txt3">
                Sign in now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
