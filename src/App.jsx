import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { SpendsProvider } from "./context/SpendsContext";

function App() {
  return (
    <SpendsProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </SpendsProvider>
  );
}

export default App;
