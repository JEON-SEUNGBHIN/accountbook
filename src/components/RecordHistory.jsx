import React from "react";
import styled from "styled-components";

const RecordHistory = ({ spends }) => {
  return (
    <HistoryUl>
      {spends.map((spend) => (
        <HistoryLi key={spend.id}>
          <LeftDiv>
            <div style={{ color: "#aeaeae" }}>{spend.date}</div>
            <ContentContainer>
              <Content>
                {spend.category} - {spend.content}
              </Content>
            </ContentContainer>
          </LeftDiv>
          <RightDiv>
            <div>{spend.amount} 원</div>
          </RightDiv>
        </HistoryLi>
      ))}
    </HistoryUl>
  );
};

const HistoryUl = styled.ul`
  width: 100%;
  margin: 1rem;
  padding: 0.5rem;
`;

const HistoryLi = styled.li`
  display: flex;
  color: #ff7700;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 1rem;
  padding: 1rem;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;

const Content = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export default RecordHistory;
