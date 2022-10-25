import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import PetCard from '../../components/PetCard/PetCard.jsx'
import PetDetails from '../PetDetails/PetDetails'

const MyProfile = (props) => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getMyProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])
  
  return (
    profile &&
    <div style={{marginTop: '200px'}}>
      
      <h1>This is your profile!</h1>
        <>
          <p>{profile.name}</p>
          {profile.pets?.map((pet) => 
            <div key={pet._id}>
              <PetCard pet={pet} />
              <Link to='/petDetails' element={<PetDetails pet={pet} handleDeletePet={props.handleDeletePet}/>}>{pet.petName}'s Profile</Link>
            </div>
          )}
        </>
    </div>
  )
}

export default MyProfile