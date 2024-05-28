import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import RecordForm from "./RecordForm";
import Months from "./Months";
import List from "./List";
import fakeData from "../resources/fakeData.json";

// const[spends, setSpends] => spends: 상태값, setSpends: 해당 상태 값을 변경하는 함수

const Home = () => {
  // 초기 선택된 월을 로컬 스토리지에서 가져옴
  const initialMonth = localStorage.getItem("selectedMonth");
  // 선택된 월 상태와 해당 상태를 변경하는 함수를 설정
  const [selectedMonth, setSelectedMonth] = useState(
    initialMonth ? parseInt(initialMonth, 10) : 1
  );

  // 지출 데이터 상태 설정
  const [spends, setSpends] = useState(fakeData);

  // 선택된 월이 변경될 때마다 로컬 스토리지에 반영
  useEffect(() => {
    localStorage.setItem("selectedMonth", selectedMonth.toString());
  }, [selectedMonth]);

  // 선택된 월에 해당하는 지출을 필터링하는 함수
  const filterSpendsByMonth = (spends, month) => {
    return spends.filter((spend) => {
      const spendMonth = new Date(spend.date).getMonth() + 1;
      return spendMonth === parseInt(month);
    });
  };

  // 수정된 지출을 반영하는 함수
  const handleUpdate = (updatedSpend) => {
    const updatedSpends = spends.map((spend) =>
      spend.id === updatedSpend.id ? updatedSpend : spend
    );
    setSpends(updatedSpends);
  };

  // 삭제된 지출을 반영하는 함수
  const handleDelete = (deletedId) => {
    const updatedSpends = spends.filter((spend) => spend.id !== deletedId);
    setSpends(updatedSpends);
  };

  return (
    <>
      <GlobalStyles />
      <InStBox>
        <RecordForm spends={spends} setSpends={setSpends} />
      </InStBox>
      <InStBox>
        <Months
          spends={spends}
          setSelectedMonth={setSelectedMonth}
          selectedMonth={selectedMonth}
        />
      </InStBox>
      <InStBox>
        {/* filteredSpends를 미리 생성하여 List 컴포넌트로 전달 */}
        <List
          filteredSpends={filterSpendsByMonth(spends, selectedMonth)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </InStBox>
    </>
  );
};

const InStBox = styled.div`
  width: 60%;
  background-color: white;
  margin: 2rem auto;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
`;

export default Home;
