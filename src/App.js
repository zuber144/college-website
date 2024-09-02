import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HodLog from "./Logins/HodLog";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hodlog" element={<HodLog />} />
      </Routes>
    </Router>
  );
}

export default App;
