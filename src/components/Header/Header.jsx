import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const {id, email, login} = useSelector((state) => state.auth)
  return (
    <header>
      {
        login ? <><h2>{login}</h2> <button>LogOut</button></> : <NavLink to='/login'>Login</NavLink>
      }
    </header>
  )
}

export default Header