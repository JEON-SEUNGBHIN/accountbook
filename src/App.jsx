import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import RecordForm from "./components/RecordForm";
import Months from "./components/Months";
// import Total from "./components/Total";
import RecordHistory from "./components/RecordHistory";
import fakeData from "./resources/fakeData.json"

function App() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [spends, setSpends] = useState(fakeData);
  const [filteredSpends, setFilteredSpends] = useState([]);

  useEffect(() => {
    const initialMonth = localStorage.getItem('selectedMonth');
    setSelectedMonth(initialMonth);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMonth', selectedMonth);
    if (selectedMonth !== null) {
      const filtered = filterSpendsByMonth(spends, selectedMonth);
      setFilteredSpends(filtered);
    }
  }, [selectedMonth, spends]);

  const filterSpendsByMonth = (spends, month) => {
    return spends.filter((spend) => {
      const spendMonth = new Date(spend.date).getMonth() + 1;
      return spendMonth === parseInt(month);
    });
  };

  console.log("Filtered Spends:", filteredSpends); // 배열 확인

  return (
    <>
      <GlobalStyles />
      <InStBox>
        <RecordForm spends={spends} setSpends={setSpends} />
      </InStBox>
      <InStBox>
        <Months spends={spends} setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />
      </InStBox>
      {/* <InStBox>
        <Total spends={filteredSpends}/>
      </InStBox> */}
      <InStBox>
        <RecordHistory spends={filteredSpends}/>
      </InStBox>
    </>
  );
}

const InStBox = styled.div` 
  width: 65%;
  background-color: white;
  margin: 2rem auto;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
