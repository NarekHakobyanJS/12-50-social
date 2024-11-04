import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsersThunk, changePageAC } from '../store/usersReducer';
import User from '../components/User/User';
import './style.css'

const Users = () => {
  const { page, users, totalUsersCount, pageCount } = useSelector((state) => state.usersPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsersThunk(page, pageCount))
  }, [page])

  let pages = []
  let p = Math.round(totalUsersCount / pageCount)

  for (let i = 1; i <= p; i++) {
    pages.push(i)
  }




  return (
    <div>
      <div>
        {
          pages.map((p) => {
            return <button className={p === page ? 'active' : ''} onClick={() => dispatch(changePageAC(p))}>{p}</button>
          })
        }
      </div>
      <div className='users-block'>
        {
          users.map((user) => {
            return <User key={user.id} user={user} />
          })
        }
      </div>

    </div>
  )
}

export default Users