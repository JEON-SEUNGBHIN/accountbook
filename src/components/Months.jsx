import React from "react";
import styled from "styled-components";

const Months = () => {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <BoxStyle>
      {months.map((month, index) => (
        <MonthBox key={index} onClick={() => handleClick(month)}>
          {month}
        </MonthBox>
      ))}
    </BoxStyle>
  );
};

const BoxStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;

const MonthBox = styled.div`
  margin: 0.2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer; /* 클릭 가능한 커서 설정 */
`;

export default Months;
