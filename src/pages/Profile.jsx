import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunk } from '../store/profileReducer'
import './style.css'
const Profile = () => {
    const {id} = useParams()
    const {profile} = useSelector((state) => state.profilePage)
    console.log(profile);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileThunk(id))
    }, [])
  return (
    <div>
        <div className='profile'>
            <h2>{profile?.fullName}</h2>
            <img width={150} src={profile?.photos.large === null ? 'https://cdn-icons-png.flaticon.com/512/219/219986.png' : profile?.photos.large} />
            <b>{profile?.aboutMe}</b>
        </div>
    </div>
  )
}

export default Profile