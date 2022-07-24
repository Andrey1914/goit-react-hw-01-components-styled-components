import PropTypes from 'prop-types';
import { Item, Span, Avatar, UserName } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <Item>
      <Span statusLabel={isOnline}></Span>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
