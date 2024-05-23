import React, { useState } from "react";
import styled from "styled-components";

const RecordForm = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  return (
    <StyledForm>
      <StyledFormGroup>
        날짜
        <StyledInput type="date" />
      </StyledFormGroup>
      <StyledFormGroup>
        항목
        <StyledInput type="text" placeholder="지출 항목" />
      </StyledFormGroup>
      <StyledFormGroup>
        금액
        <StyledInput type="text" placeholder="지출 금액" />
      </StyledFormGroup>
      <StyledFormGroup>
        내용
        <StyledInput type="text" placeholder="지출 내용" />
      </StyledFormGroup>
      <StyledBtn type="submit">저장</StyledBtn>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFormGroup = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  box-sizing: border-box;
  border: 1px solid #b4b4b4;
`;

const StyledBtn = styled.button`
  width: 5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  color: white;
  background-color: #ff5100;
  border: 1px solid #ff5100;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default RecordForm;
