import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './User.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { followingUsersThunk } from '../../store/usersReducer'

const User = ({ user }) => {
  const [follow, setFollow] = useState(false)

  const dispatch = useDispatch();

  const un = (id) => {
    console.log(id);
    
  }

  const f = (id) => {
    dispatch(followingUsersThunk(id))
    
  }

  return (
    <div className='user'>
      <NavLink to={`/profile/${user.id}`}>
        <h3>{user.name}</h3>
        <b>{user.id}</b>
        <img width={150} src={user.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : user.photos.large} />

      </NavLink>
      {
        follow
          ? <button onClick={() => un(user.id)}>unfollow</button>
          : <button onClick={() => f(user.id)}>follow</button>
      }
    </div>
  )
}

export default User