// import { useEffect } from 'react';
import styles from './PetCard.module.css'

const PetCard = ({ pet, photo}) => {

  // useEffect(() => {
  //   console.log('this is pet', pet);
  // }, [pet])

  // useEffect(() => {
  //   console.log('this is pet', photo);
  // }, [photo])

  return (
    <>
      <div className={styles.container}>
        <img src={
          pet.photo
            ? pet.photo
            : `So sad, no pet photo`
        }
        alt="your pet"
        className="card-img-top"
        style={{ width: "640px" }}
        />
      </div>
      <div className={styles.card}>
        <h2>{pet.petName}</h2>
        <h2>{pet.age}</h2>
        <h2>{pet.breed}</h2>
      </div>
      <div className="card-footer">
      </div>
    </>
  )
}

export default PetCard