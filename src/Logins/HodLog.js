import React from "react";

const HodLog = () => {
  return (
    <>
      <h2 id="hd" align="center">
        HOD Log-In
      </h2>
      <form className="form-container" action="#" autocomplete="off">
        <div className="inputBox">
          <input id="user" required type="text" />
          <span id="user_email" for="user">
            Username
          </span>
        </div>
        <br />
        <div className="inputBox">
          <input id="password" required type="password" />
          <span for="password">Password</span>
          <div id="toggle" onclick="showHide()"></div>
        </div>
        <br />
        <a href="#">Forgot password</a>
        <button className="submit-button">Login</button>
        <hr />
        <p>If not registered</p>
        <a href="#" id="sin">
          Sign-Up
        </a>
      </form>
    </>
  );
};

export default HodLog;
