import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main id="mi">
        <h2 className="h2">Welcome To SGP Portal</h2>
        <p className="h2">Use these links to Login respectively.</p>
        {/* <marquee style="color: rgb(80, 0, 0); background-color: rgba(255, 0, 0, 0.226);">
          This portal was created so that parents can check attendance and
          internal marks of their children and teachers can updated their
          student's attendance and internal marks.
        </marquee> */}
        <div id="btns">
          <a href="#" id="parent">
            <button className="btn">As a Parent</button>
          </a>
          <br />
          <a href="logins/log-hod.html" id="hod">
            <button className="btn">As a HOD</button>
          </a>
          <br />
          <a href="logins/log-teachers.html" id="teacher">
            <button className="btn">As a Teacher</button>
          </a>
        </div>
      </main>
    </>
  );
};

export default Main;
