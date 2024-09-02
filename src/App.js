import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HodLog from "./Logins/HodLog";
import TeacherLog from "./Logins/TeacherLog";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hodlog" element={<HodLog />} />
        <Route path="/teacherlog" element={<TeacherLog />} />
      </Routes>
    </Router>
  );
}

export default App;
