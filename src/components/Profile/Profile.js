import React from 'react'
import PropTypes from 'prop-types'
import s from './Profile.module.css'
import Stats from './Stats.js'


 const Profile = ({name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={avatar} className={s.avatar}/>
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
      </div>
      <Stats {...stats}/>
  </div>
)
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile
