import styled from "styled-components";

const Months = ({ spends, setSelectedMonth, selectedMonth }) => {
  // 월 클릭 이벤트를 처리하는 함수
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    // 월 선택 박스 스타일을 적용한 컴포넌트
    <BoxStyle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
        // 각 월을 표시하는 컴포넌트
        <MonthBox
          key={month}
          onClick={() => handleMonthClick(month)}
          // spends가 정의되었는지 확인하고, 정의되어 있다면 some 함수를 호출
          isActive={spends && spends.some(
            (spend) => new Date(spend.date).getMonth() === month - 1
          )}
          // 선택된 월인지 여부에 따라 스타일을 변경
          isSelected={month === selectedMonth}
        >
          {month}월
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

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MonthBox = styled.div`
  margin: 0.2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "#fcba77" : "#ededed")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fcba77;
    color: white;

  }
`;

export default Months;
