import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import PetCard from '../../components/PetCard/PetCard.jsx'
import PetDetails from '../PetDetails/PetDetails'
import styles from "./MyProfile.module.css"

const MyProfile = (props) => {

  return (
    props.pets.length &&
    <>
    <div className={styles.displayWelcome}>
      <h2>Welcome, {props.profile.name} </h2>
      <img src={`${props.profile.photo}`} alt="profile upload" style={{height: '90px', marginTop: '0px'}} />
    </div>
      <div className={styles.displayCards}>
      {/* <h1>Welcome to your profile, {props.profile.name}</h1> */}
        {props.pets?.map((pet) =>
        <div key={pet._id} className={styles.petContainer}>
          <PetCard pet={pet} />
          <Link to={`/petDetails/${pet._id}`}>{pet.petName}'s Profile</Link>
        </div> 
        )}
      </div>
    </>
  )
}

export default MyProfile