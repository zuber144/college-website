import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main id="mi">
        <h2 className="h2">Welcome To SGP Portal</h2>
        <p className="h2">Use these links to Login respectively.</p>
        <marquee>
          This portal was created so that parents can check attendance and
          internal marks of their children and teachers can update their
          student's attendance and internal marks.
        </marquee>
        <div id="btns">
          <a href="#" id="parent">
            <button className="btn">Go as a Parent</button>
          </a>
          <br />
          <Link to="/hodlog" id="hod">
            <button className="btn">As a HOD</button>
          </Link>
          <br />
          <Link to="/teacherlog" id="teacher">
            <button className="btn">As a Teacher</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Main;
