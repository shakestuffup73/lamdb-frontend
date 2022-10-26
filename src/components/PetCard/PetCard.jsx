
import styles from './PetCard.module.css'

const PetCard = ({ pet, photo}) => {

  return (
    <>
    <div className={styles.cardDiv}>
      <img src={
        pet.photo
          ? pet.photo
          : `So sad, no pet photo`
      }
      alt="your pet"
      />
      <div className={styles.detailsDiv}>
        <p>{pet.petName}</p>
        <p>{pet.age}</p>
        <p>{pet.breed}</p>
      </div>
    </div>
    </>
  )
}

export default PetCard