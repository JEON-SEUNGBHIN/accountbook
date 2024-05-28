import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteSpend, editSpend } from "../redux/modules/action";

const Detail = () => {
  // URL에서 id 매개변수를 가져옴
  const { id } = useParams();

  // 페이지 이동을 위한 navigate 함수를 가져옴
  const navigate = useNavigate();

  // Redux의 상태를 가져옴
  const spends = useSelector((state) => state.spends.spends);
  const spend = spends.find((s) => s.id.toString() === id);

  // useDispatch 훅을 사용하여 액션을 디스패치
  const dispatch = useDispatch();
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);
  const contentRef = useRef(null);
  
// 지출 항목이 변경될 때마다 해당 항목의 값을 입력란에 채움
  useEffect(() => {
    if (spend) {
      dateRef.current.value = spend.date;
      categoryRef.current.value = spend.category;
      amountRef.current.value = spend.amount;
      contentRef.current.value = spend.content;
    }
  }, [spend]);

  // 삭제하는 함수
  const handleDelete = () => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      dispatch(deleteSpend(spend.id)); // deleteSpend 액션 디스패치
      navigate("/");
    }
  };

  // 수정하는 함수
  const handleEdit = (e) => {
    e.preventDefault();
    const updatedSpend = {
      ...spend,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      amount: parseFloat(amountRef.current.value),
      content: contentRef.current.value,
    };
    const isConfirmed = window.confirm("정말로 수정하시겠습니까?");
    if (isConfirmed) {
      dispatch(editSpend(updatedSpend)); // editSpend 액션 디스패치
      navigate("/");
    }
  };

  if (!spend) {
    return <div>해당 항목을 찾을 수 없습니다.</div>;
  }

  return (
    // 수정 폼을 랜더링
    <UpdateFormStyle onSubmit={handleEdit}>
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
        <UpdateBtnStyleDelete type="button" onClick={handleDelete}>
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

export default Detail;
