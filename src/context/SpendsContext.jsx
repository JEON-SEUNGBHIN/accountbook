import React, { createContext, useState } from "react";
import fakeData from "../resources/fakeData.json";

export const SpendsContext = createContext();

export const SpendsProvider = ({ children }) => {
  const [spends, setSpends] = useState(fakeData);

  const deleteSpend = (id) => {
    const updatedSpends = spends.filter((spend) => spend.id !== id);
    setSpends(updatedSpends);
    alert("삭제되었습니다!");
    return updatedSpends;
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
    <SpendsContext.Provider value={{ spends, deleteSpend, editSpend }}>
      {children}
    </SpendsContext.Provider>
  );
};
