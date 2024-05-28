import React, { createContext, useState } from "react";
import fakeData from "../resources/fakeData.json";

// 지출 데이터와 관련된 컨텍스트를 생성
export const SpendsContext = createContext();

// 지출 관련 데이터를 제공하는 프로바이더 컴포넌트를 생성
export const SpendsProvider = ({ children }) => {
  // 초기 상태로 fakeData를 사용하여 spends 상태를 설정
  const [spends, setSpends] = useState(fakeData);

  // 선택된 ID에 해당하는 지출을 삭제하는 함수
  const deleteSpend = (id) => {
    // 선택된 ID를 가진 지출을 제외한 나머지 지출을 유지
    const updatedSpends = spends.filter((spend) => spend.id !== id);
    // 삭제된 지출을 반영하여 상태를 업데이트
    setSpends(updatedSpends);
    alert("삭제되었습니다!");
    // 업데이트 된 지출 목록을 반환
    return updatedSpends;
  };

  // 업데이트된 지출 정보로 기존 지출을 수정하는 함수
  const editSpend = (updatedSpend) => {
    // 업데이트된 지출 정보를 이용하여 새로운 지출 목록을 생성
    const updatedSpends = spends.map((s) =>
      // ID가 일치하는 경우 해당 지출을 업데이트하고 그렇지 않은 경우 기존 지출을 그대로 유지
      s.id === updatedSpend.id ? updatedSpend : s
    );
    // 수정된 지출 목록으로 상태를 업데이트
    setSpends(updatedSpends);
    alert("수정이 완료되었습니다!!!");
    // 업데이트된 지출 목록을 반환
    return updatedSpends;
  };

  // 지출 관련 데이터와 함수를 하위 컴포넌트에 제공
  return (
    <SpendsContext.Provider value={{ spends, deleteSpend, editSpend }}>
      {children}
    </SpendsContext.Provider>
  );
};
