import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 20px;

  background-color: var(--main-bg-color);
  border-radius: 5px;

  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;

  background-color: ${props =>
    ({
      true: 'var(--online-color)',
      false: 'var(--offline-color)',
    }[props.statusLabel] || '#cfcfcf')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
