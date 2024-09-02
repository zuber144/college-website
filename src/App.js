import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HodLog from "./Logins/HodLog";
import TeacherLog from "./Logins/TeacherLog";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hodlog" element={<HodLog />} />
        <Route path="/teacherlog" element={<TeacherLog />} />
      </Routes>
    </Router>
  );
}

export default App;
