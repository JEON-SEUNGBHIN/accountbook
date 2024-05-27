import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UpdateForm = ({ setSpends, spends }) => {
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
    setSpends(spends.filter((spend) => spend.id !== id));
    navigate("/");
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

  if (!spend) return <div>지출 항목을 찾을 수 없습니다.</div>;

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
      <UpdateBtnStyle type="submit">수정</UpdateBtnStyle>
      <UpdateBtnStyle type="button" onClick={() => deleteSpend(spend.id)}>
        삭제
      </UpdateBtnStyle>
      <UpdateBtnStyle type="button" onClick={() => navigate(-1)}>
        뒤로 가기
      </UpdateBtnStyle>
    </UpdateFormStyle>
  );
};

const UpdateFormStyle = styled.form`
  width: 100%;
  background-color: white;
  padding: 0.5rem;
  margin: 1rem;
`;

const UpdateInputStyle = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
`;

const UpdateBtnStyle = styled.button`
  padding: 1rem;
  color: white;
  border-radius: 1rem;
`;

export default UpdateForm;
