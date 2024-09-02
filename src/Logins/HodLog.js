import React, { useState } from "react";

const HodLog = () => {
  const [passwordvisible, setpasswordvisible] = useState(false);

  function togglepass() {
    setpasswordvisible(!passwordvisible);
  }

  return (
    <>
      <h2 id="hd" align="center">
        HOD Log-In
      </h2>
      <form className="form-container" action="#" autoComplete="off">
        <div className="inputBox">
          <input id="user" required type="text" />
          <span htmlFor="user">Username</span>
        </div>
        <br />
        <div className="inputBox" style={{ position: "relative" }}>
          <input
            id="password"
            required
            type={passwordvisible ? "text" : "password"}
          />
          <span htmlFor="password">Password</span>
          <div
            id="toggle"
            className={passwordvisible ? "hide" : ""}
            onClick={togglepass}
          ></div>
        </div>
        <br />
        <a href="#">Forgot password</a>
        <button className="submit-button">Login</button>
        <hr />
        <p>
          Do not have an account?{" "}
          <a href="#" id="sin">
            Register
          </a>
        </p>
      </form>
    </>
  );
};

export default HodLog;
