import React from 'react'
import { NavLink } from 'react-router-dom'
import './User.css'

const User = ({user}) => {
  return (
    <NavLink className='user' to={`/profile/${user.id}`}>
        <h3>{user.name}</h3>
        <b>{user.id}</b>
        <img width={150} src={user.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : user.photos.large} />
        <button>follow</button>
    </NavLink>
  )
}

export default User