import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunk, changeAvatarThunk} from '../store/profileReducer'
import './style.css'

const Profile = () => {
  // const [file, setFile] = useState('')
  const { id } = useParams()
  const { profile } = useSelector((state) => state.profilePage)
  const { userId, email } = useSelector((state) => state.auth)

  console.log(profile);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfileThunk(id))
  }, [])


  const sendPhoto = (e) => {
    let file = e.target.files[0];
    dispatch(changeAvatarThunk(file))
  }

  return (
    <div>
      <div className='profile'>

        
        {
          email
            ? <div>
              
              <input type="file" onChange={sendPhoto}/>
              <img width={150} src={profile?.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : profile?.photos.large} />
            </div>
            : <img width={150} src={profile?.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : profile?.photos.large} />

        }

        <b>{profile?.aboutMe}</b>
        <h2>{profile?.fullName}</h2>
      </div>
    </div>
  )
}

export default Profile