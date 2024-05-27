import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";
import fakeData from "./resources/fakeData.json";

function App() {
  const [spends, setSpends] = useState(fakeData);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home spends={spends} setSpends={setSpends} />} />
          <Route
            path="/update/:id"
            element={<UpdateForm spends={spends} setSpends={setSpends} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
