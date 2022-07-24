import PropTypes from 'prop-types';
import {
  WrapperProfile,
  Description,
  UserName,
  Avatar,
  Tag,
  Location,
  Label,
  List,
  Item,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section className="section">
      <div className="container">
        <WrapperProfile>
          <Description>
            <Avatar src={avatar} alt="User avatar" width="100" height="100" />
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
          </Description>
          <List>
            <Item>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
            </Item>
            <Item>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
            </Item>
            <Item>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
            </Item>
          </List>
        </WrapperProfile>
      </div>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
