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
      <img src={
        pet.photo
          ? pet.photo
          : `So sad, no pet photo`
      }
      alt="your pet"
      className="card-img-top"
      style={{ width: "240px" }}
      />
      <div>
        <p>{pet.petName}</p>
        <p>{pet.age}</p>
        <p>{pet.breed}</p>
      </div>
    </>
  )
}

export default PetCard