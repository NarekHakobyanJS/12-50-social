import React from 'react'
import './User.css'

const User = ({user}) => {
  return (
    <div className='user'>
        <h3>{user.name}</h3>
        <b>{user.id}</b>
        <img width={150} src={user.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : user.photos.large} />
        <button>follow</button>
    </div>
  )
}

export default User