import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const RecordForm = ({ spends, setSpends }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  const addSpends = (e) => {
    e.preventDefault();
    if (!date || !category || !amount || !content) {
      alert("항목을 모두 채워주세요!!");
      return;
    }

    const recordId = {
      id: uuidv4(),
      date,
      category,
      amount: parseFloat(amount),
      content,
    };

    setSpends([...spends, recordId]);

    setDate("");
    setCategory("");
    setAmount("");
    setContent("");

    alert("성공적으로 등록되었습니다!")
  };

  return (
    <StyledForm onSubmit={addSpends}>
      <StyledFormGroup>
        날짜
        <StyledInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} />
      </StyledFormGroup>
      <StyledFormGroup>
        항목
        <StyledInput
          type="text"
          placeholder="지출 항목"
          value={category}
          onChange={(e) => setCategory(e.target.value)}/>
      </StyledFormGroup>
      <StyledFormGroup>
        금액
        <StyledInput
          type="text"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}/>
      </StyledFormGroup>
      <StyledFormGroup>
        내용
        <StyledInput
          type="text"
          placeholder="지출 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
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
  height: 2.3rem;
  margin-left: 0.8rem;
  margin-top: 1.2rem;
  color: white;
  background-color: #ff5100;
  border: 1px solid #ff5100;
  cursor: pointer;
`;

export default RecordForm;
