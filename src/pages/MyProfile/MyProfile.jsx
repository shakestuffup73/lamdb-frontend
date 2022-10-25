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
            <table key={idx}>
              <tr>
                <td>{pet.petName}</td>
                <td>{pet.age}</td>
                <td>{pet.breed}</td>
                <td>
                  <button>{pet.petName}'s Profile</button>
                </td>
              </tr>
            </table>
          )}
        </>
    </div>
  )
}

export default MyProfile