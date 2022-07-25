import styled from '@emotion/styled';

export const Row = styled.tr`
  height: 30px;

  &:nth-of-type(odd) {
    background-color: #ecefff;
  }

  &:nth-of-type(even) {
    background-color: #f6f6ff;
  }
`;
