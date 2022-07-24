import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 20px;

  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }

  background-color: ${props => {
    switch (props.bgcItem) {
      case 'docx':
        return 'rgb(121, 199, 255)';
      case 'pdf':
        return 'rgb(155, 41, 255)';
      case 'mp3':
        return 'rgb(219, 43, 43)';
      case 'psd':
        return 'rgb(21, 193, 138)';
      default:
        return 'rgb(21, 193, 138)';
    }
  }};
`;

export const Label = styled.span`
  color: var(--third-text-color);
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  color: var(--third-text-color);
  font-weight: 700;
  font-size: 18px;
`;
