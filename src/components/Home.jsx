import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import RecordForm from "./RecordForm";
import Months from "./Months";
import List from "./List";
import fakeData from "../resources/fakeData.json";

const Home = () => {
  const initialMonth = localStorage.getItem("selectedMonth");
  const [selectedMonth, setSelectedMonth] = useState(
    initialMonth ? parseInt(initialMonth, 10) : 1
  );

  const [spends, setSpends] = useState(fakeData);
  const [filteredSpends, setFilteredSpends] = useState([]);

  useEffect(() => {
    localStorage.setItem("selectedMonth", selectedMonth.toString());
  }, [selectedMonth]);

  useEffect(() => {
    const filtered = filterSpendsByMonth(spends, selectedMonth);
    setFilteredSpends(filtered);
  }, [selectedMonth, spends]);

  const filterSpendsByMonth = (spends, month) => {
    return spends.filter((spend) => {
      const spendMonth = new Date(spend.date).getMonth() + 1;
      return spendMonth === parseInt(month);
    });
  };

  const handleUpdateSpend = (updatedSpend) => {
    const updatedSpends = spends.map((spend) =>
      spend.id === updatedSpend.id ? updatedSpend : spend
    );
    setSpends(updatedSpends);
  };

  const handleDeleteSpend = (deletedId) => {
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
      <List
          spends={spends}
          filteredSpends={filterSpendsByMonth(spends, selectedMonth)}
          onUpdate={handleUpdateSpend} onDelete={handleDeleteSpend}
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
