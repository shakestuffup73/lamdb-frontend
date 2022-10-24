import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const MyProfile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getMyProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  return (
    <>
      <h1>This is your profile!</h1>
        <>
          <p>{profile._id}{profile.name}</p>
        </>
    </>
  )
}

export default MyProfile