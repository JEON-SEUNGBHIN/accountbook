import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { SpendsProvider } from "./context/SpendsContext";
import store from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}> {/* Redux의 Provider로 앱 감싸기 */}
      <SpendsProvider> {/* 기존의 SpendsProvider는 유지 */}
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </SpendsProvider>
    </Provider>
  );
}

export default App;
