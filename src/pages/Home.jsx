import React, { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginThunk } from '../store/authReducer'
import { Navigate } from 'react-router-dom'
const Home = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  //getLoginThunk 

  const {userId} = useSelector((state) => state.auth)

  console.log(userId);
  
  const dispatch = useDispatch()
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(getLoginThunk(login, password))
  }

  if(userId) {
    return <Navigate to={`/profile/${userId}`}/>
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Home