import styled from "styled-components";

const Months = ({ spends, setSelectedMonth }) => {
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <BoxStyle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
        <MonthBox
          key={month}
          onClick={() => handleMonthClick(month)}
          isActive={spends.some((spend) => new Date(spend.date).getMonth() === month - 1)}
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
  cursor: pointer; 
`;

export default Months;
