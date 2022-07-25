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

  background-color: ${props =>
    ({
      docx: 'rgb(121, 199, 255)',
      pdf: 'rgb(155, 41, 255)',
      mp3: 'rgb(219, 43, 43)',
      psd: 'rgb(21, 193, 138)',
    }[props.bgcItem] || '#cfcfcf')};
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
