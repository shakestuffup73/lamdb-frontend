import { Link } from "react-router-dom"
import PetCard from '../../components/PetCard/PetCard.jsx'
import styles from "./MyProfile.module.css"
import ChangePassword from '../ChangePassword/ChangePassword'

const MyProfile = (props) => {

  return (
    props.pets.length &&
    <>
    <div className={styles.displayWelcome}>
      <h2>Welcome, {props.profile.name} </h2>
      <img src={`${props.profile.photo}`} alt="profile upload" style={{height: '90px', marginTop: '0px'}} />
      <Link to="/changePassword" className={styles.navUL}>Change Account Password</Link>
    </div>
      <div className={styles.displayCards}>
        {props.pets?.map((pet) =>
        <div key={pet._id} className={styles.petContainer}>
          <PetCard pet={pet} />
          <Link to={`/petDetails/${pet._id}`}>{pet.petName}'s Profile</Link>
        </div> 
        )}
      </div>
      <ChangePassword />
    </>
  )
}

export default MyProfile