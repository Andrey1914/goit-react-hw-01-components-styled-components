import styled from '@emotion/styled';

export const StatisticsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  overflow: hidden;

  background-color: var(--main-bg-color);
  border-radius: 5px;

  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;

  border-top: 1px solid var(--border-color);
`;
