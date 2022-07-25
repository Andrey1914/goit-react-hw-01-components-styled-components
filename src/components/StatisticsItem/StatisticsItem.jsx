import PropTypes from 'prop-types';

import { Item, Label, Percentage } from './StatisticsItem.styled';

export default function StatisticsItem({ statItem }) {
  const type = statItem.label.slice(1);

  return (
    <Item bgcItem={[type]}>
      <Label>{statItem.label}</Label>
      <Percentage>{statItem.percentage}%</Percentage>
    </Item>
  );
}

StatisticsItem.propTypes = {
  statItem: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
