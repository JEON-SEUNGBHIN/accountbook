import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import Detail from "./components/Detail";
import fakeData from "./resources/fakeData.json";

// 애플리케이션의 라우팅을 설정하는 컴포넌트
function App() {
  // 지출 데이터와 해당 데이터를 업데이트하는 함수를 상태로 관리
  const [spends, setSpends] = useState(fakeData);

  const deleteSpend = (id) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      const updatedSpends = spends.filter((spend) => spend.id !== id);
      setSpends(updatedSpends);
      alert("삭제되었습니다!");
      return updatedSpends;
    }
  };

  const editSpend = (updatedSpend) => {
    const updatedSpends = spends.map((s) =>
      s.id === updatedSpend.id ? updatedSpend : s
    );
    setSpends(updatedSpends);
    alert("수정이 완료되었습니다!!!");
    return updatedSpends;
  };

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // Home 컴포넌트를 렌더링하고 spends와 setSpends props를 전달
            element={
              <Home
                spends={spends}
                setSpends={setSpends}
                onDelete={deleteSpend}
                onEdit={editSpend}
              />
            }
          />
          <Route
            path="/update/:id"
            // Detail 컴포넌트를 렌더링하고 spends와 setSpends props를 전달
            element={
              <Detail
                spends={spends}
                setSpends={setSpends}
                onDelete={deleteSpend}
                onEdit={editSpend}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
