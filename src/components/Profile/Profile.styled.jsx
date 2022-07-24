import styled from '@emotion/styled';

export const WrapperProfile = styled.div`
  width: 400px;
  background-color: var(--main-bg-color);
  border-radius: 5px;
  overflow: hidden;

  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -webkit-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  -moz-box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
`;

export const Description = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 10px 0;

  font-size: 18px;
  font-weight: 700;
  color: var(--main-text-color);
`;

export const Tag = styled.p`
  margin-bottom: 5px;

  font-size: 14px;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

export const Label = styled.span`
  margin-bottom: 5px;

  font-size: 14px;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 10px;

  text-align: center;
  background-color: var(--secondary-bg-color);

  &:not(:last-child) {
  border-right: 1px solid var(--border-color);
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
