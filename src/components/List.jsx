import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 지출 목록을 표시하는 컴포넌트
const List = ({ filteredSpends }) => {
  // filteredSpends가 변경될 때마다 spends 상태 업데이트
  const [spends, setSpends] = useState(filteredSpends || []);

  useEffect(() => {
    setSpends(filteredSpends || []);
  }, [filteredSpends]);

  return (
    <HistoryContainer>
      {/* 필터된 지출 목록이 있을 경우 */}
      {spends.length > 0 ? (
        <HistoryUl>
          {/* 각 지출 항목을 링크로 표시 */}
          {spends.map((spend) => (
            <StyledLink key={spend.id} to={`/update/${spend.id}`}>
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
            </StyledLink>
          ))}
        </HistoryUl>
      ) : (
        // 지출이 없는 경우 메시지 표시
        <NoSpends>지출이 없습니다</NoSpends>
      )}
    </HistoryContainer>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HistoryContainer = styled.div`
  width: 100%;
`;

const HistoryUl = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

const HistoryLi = styled.li`
  width: 90%;
  display: flex;
  color: #ff7700;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 1rem auto;
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
  flex: 1;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: auto;
`;

const NoSpends = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: gray;
`;

export default List;
