import MainPage from "./component/MainPage";
import React from "react";
import MenuPage from "./component/MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
