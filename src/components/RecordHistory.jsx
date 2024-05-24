import React from "react";
import styled from "styled-components";

const RecordHistory = ({ spends, selectedMonth }) => {
  const filteredSpends = spends.filter((spend) => {
    const spendMonth = new Date(spend.date).getMonth() + 1;
    return spendMonth === selectedMonth;
  });

  return (
    <HistoryUl>
      {filteredSpends.map((spend) => (
        <HistoryLi key={spend.id}>
          <LeftDiv>
            <div>{spend.date}</div>
            <div>{spend.category} - {spend.content}</div>
          </LeftDiv>
          <div style={{display:"flex", alignItems:"center"}}>{spend.amount} 원</div>
        </HistoryLi>
      ))}
    </HistoryUl>
  );
};

const HistoryUl = styled.ul`
  width: 100%;
  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid lightgray;
`;

const HistoryLi = styled.li`
  display: flex;
  color: #ff7700;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RecordHistory;
