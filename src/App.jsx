import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import RecordForm from "./components/RecordForm";
import Months from "./components/Months";

function App() {
  return (
    <>
      <GlobalStyles />
      <InStBox>
        <RecordForm />
      </InStBox>
      <InStBox>
        <Months />
      </InStBox>
    </>
  );
}

const InStBox = styled.div`
  background-color: white;
  margin: 2rem 6rem;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
`;

export default App;
