// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/count" element={<Counter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
