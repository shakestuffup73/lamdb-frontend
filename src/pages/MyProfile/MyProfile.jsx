import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import PetCard from '../../components/PetCard/PetCard.jsx'

const MyProfile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getMyProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  // useEffect(() => {
  //   console.log('this is profile',profile);
  // }, [profile])
  
  return (
    profile &&
    <div style={{marginTop: '201px'}}>
      <h1>This is your profile!</h1>
        <>
          <p>{profile.name}</p>
          {profile.pets?.map((pet, idx) => 
            <div key={idx}>
              <PetCard pet={pet}  />
              <button>{pet.petName}'s Profile</button>
            </div>
          )}
        </>
    </div>
  )
}

export default MyProfile