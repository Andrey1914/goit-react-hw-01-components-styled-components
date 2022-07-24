import StatisticsItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import { StatisticsWrap, Title, List } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics section">
      <div className="container">
        <StatisticsWrap>
          {title && <Title>{title}</Title>}

          <List>
            {stats.map(stat => (
              <StatisticsItem key={stat.id} statItem={stat} />
            ))}
          </List>
        </StatisticsWrap>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
