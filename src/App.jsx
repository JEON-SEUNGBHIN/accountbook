import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import RecordForm from "./components/RecordForm";
import Months from "./components/Months";
import RecordHistory from "./components/RecordHistory";

function App() {
  const initialState = JSON.parse(localStorage.getItem('spends')) || [];
  const [spends, setSpends] = useState(initialState);
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends));
  }, [spends]);

  return (
    <>
      <GlobalStyles />
      <InStBox>
        <RecordForm spends={spends} setSpends={setSpends} />
      </InStBox>
      <InStBox>
        <Months spends={spends} setSelectedMonth={setSelectedMonth} />
      </InStBox>
      <InStBox>
        <RecordHistory spends={spends} selectedMonth={selectedMonth} />
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
