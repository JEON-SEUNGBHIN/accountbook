import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RecordHistory = ({ spends }) => {
  return (
    <HistoryContainer>
      {spends.length > 0 ? (
        <HistoryUl>
          {spends.map((spend) => (
            <Link key={spend.id} to={`/update/${spend.id}`}>
              <HistoryLi>
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
            </Link>
          ))}
        </HistoryUl>
      ) : (
        <NoSpends>지출이 없습니다</NoSpends>
      )}
    </HistoryContainer>
  );
};

const HistoryContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const HistoryUl = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const HistoryLi = styled.li`
  width: 90%;
  display: flex;
  color: #ff7700;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
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

const NoSpends = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: gray;
`;

export default RecordHistory;
