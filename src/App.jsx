import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import RecordForm from "./components/RecordForm";
import Months from "./components/Months";
import RecordHistory from "./components/RecordHistory";

function App() {
  const [spends, setSpends] = useState([]);

  return (
    <>
      <GlobalStyles />
      <InStBox>
        <RecordForm spends={spends} setSpends={setSpends} />
      </InStBox>
      <InStBox>
        <Months />
      </InStBox>
      <InStBox>
        <RecordHistory/>
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
