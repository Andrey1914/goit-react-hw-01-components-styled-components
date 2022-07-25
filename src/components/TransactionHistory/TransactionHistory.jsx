import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import { Table, HeadRow } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <section className="section">
      <div className="container">
        <Table>
          <thead>
            <HeadRow>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </HeadRow>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <TransactionItem
                  key={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
