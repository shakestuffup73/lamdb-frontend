import styles from './PetCard.module.css'

const PetCard = ({ pet }) => {
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
        <button>Update Pet Photo</button>
      </div>
      <div className={styles.card}>
        <h2>{pet.petName}</h2>
        <h2>{pet.age}</h2>
        <h2>{pet.breed}</h2>
      </div>
    </>
  )
}

export default PetCard