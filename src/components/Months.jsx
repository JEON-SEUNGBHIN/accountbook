import styled from "styled-components";

const Months = ({ spends, setSelectedMonth, selectedMonth }) => {
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <BoxStyle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
        <MonthBox
          key={month}
          onClick={() => handleMonthClick(month)}
          isActive={spends.some(
            (spend) => new Date(spend.date).getMonth() === month - 1
          )}
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
