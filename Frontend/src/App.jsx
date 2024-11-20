import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import SearchPage from "./components/SearchPage";
import ListPage from "./components/ListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/lists" element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
