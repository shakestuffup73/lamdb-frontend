import { Link } from "react-router-dom"
import PetCard from '../../components/PetCard/PetCard.jsx'
import styles from "./MyProfile.module.css"

const MyProfile = (props) => {

  return (
    <>
    <div className={styles.profileDiv}>
    <div className={styles.displayWelcome}>
      <h2>Welcome, {props.profile.name} </h2>
      <img src={`${props.profile.photo}`} alt="profile upload" style={{height: '90px', marginTop: '0px'}} />
      <Link to="/changePassword" className={styles.navUL}>Change Account Password</Link>
    </div>
    {props.pets?.length ?
      <div className={styles.displayCards}>
        {props.pets?.map((pet) =>
        <div key={pet._id} className={styles.petContainer}>
          <PetCard pet={pet} />
          <Link to={`/petDetails/${pet._id}`} className={styles.profileLink}>{pet.petName}'s Profile</Link>
          <Link
            to={`/${pet._id}/emergency-contact`}
            state={pet}
            className={styles.profileLink}
          >
            View Emergency Contact
          </Link>
          <Link to="/addVet" className={styles.vetLink}>Add Vet Visit</Link>
        </div> 
        )}
      </div>
      :
      <div className={styles.noPet}>
        <h2>No Pets to Display</h2>
      </div>
    }
    </div> 
    </>
  )
}

export default MyProfile