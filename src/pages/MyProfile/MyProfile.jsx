import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import PetCard from '../../components/PetCard/PetCard.jsx'
import PetDetails from '../PetDetails/PetDetails'
import styles from "./MyProfile.module.css"

const MyProfile = (props) => {

  return (
    props.profile &&
      <>
      {/* <h1>Welcome to your profile, {props.profile.name}</h1> */}
      {props.profile.pets?.map((pet) =>
      <div className={styles.petContainer}>
        <PetCard pet={pet} />
        <Link to={`/petDetails/${pet._id}`} element={<PetDetails pet={pet} handleDeletePet={props.handleDeletePet}/>}>{pet.petName}'s Profile</Link>
      </div> 
      )}
    </>
  )
}

export default MyProfile