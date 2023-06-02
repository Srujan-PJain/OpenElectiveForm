import React from "react";
import Mainform from "./components/Mainform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cse from "./components/Cse";
import Parent from "./components/Parent";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/cse" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
