import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <section className="section">
      <div className="container">
        <List>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          ))}
        </List>
      </div>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
