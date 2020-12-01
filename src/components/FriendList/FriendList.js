import React from 'react'
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'

const FriendsList = ({ friends }) => {
    if(friends.length ===0) return null
    return (<ul className={s.friendList}>{friends.map(FriendListItem)}</ul>)
}

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
 };
export default FriendsList