import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UpdateForm = ({ spends, setSpends }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const spend = spends.find((s) => s.id === id);

  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (spend) {
      dateRef.current.value = spend.date;
      categoryRef.current.value = spend.category;
      amountRef.current.value = spend.amount;
      contentRef.current.value = spend.content;
    }
  }, [spend]);

  const deleteSpend = (id) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      const updatedSpends = spends.filter((spend) => spend.id !== id);
      setSpends(updatedSpends);
      navigate("/"); // 메인 페이지로 이동
      alert("삭제되었습니다!");
    } else {
      navigate(-1); // 이전 페이지로 돌아감
    }
  };

  const editSpend = (e) => {
    e.preventDefault();
    const updatedSpends = spends.map((s) =>
      s.id === spend.id
        ? {
            ...s,
            date: dateRef.current.value,
            category: categoryRef.current.value,
            amount: parseFloat(amountRef.current.value),
            content: contentRef.current.value,
          }
        : s
    );
    setSpends(updatedSpends);
    navigate("/"); // 수정 후 메인 페이지로 이동
  };

  return (
    <UpdateFormStyle onSubmit={editSpend}>
      날짜
      <UpdateInputStyle type="date" ref={dateRef} />
      항목
      <UpdateInputStyle type="text" ref={categoryRef} />
      금액
      <UpdateInputStyle type="text" ref={amountRef} />
      내용
      <UpdateInputStyle type="text" ref={contentRef} />
      <ButtonContainer>
        <UpdateBtnStyle type="submit">수정</UpdateBtnStyle>
        <UpdateBtnStyleDelete
          type="button"
          onClick={() => deleteSpend(spend.id)}
        >
          삭제
        </UpdateBtnStyleDelete>
        <UpdateBtnStyleBack type="button" onClick={() => navigate(-1)}>
          뒤로 가기
        </UpdateBtnStyleBack>
      </ButtonContainer>
    </UpdateFormStyle>
  );
};

const UpdateFormStyle = styled.form`
  width: 60%;
  background-color: white;
  padding: 3rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;

const UpdateInputStyle = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const UpdateBtnStyle = styled.button`
  background-color: #ff5100;
  color: white;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const UpdateBtnStyleDelete = styled(UpdateBtnStyle)`
  background-color: red;
`;

const UpdateBtnStyleBack = styled(UpdateBtnStyle)`
  background-color: gray;
`;

export default UpdateForm;
