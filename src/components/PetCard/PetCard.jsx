import styles from './PetCard.module.css'

const PetCard = ({ pet }) => {
  return (
    <div className={styles.card}>
      <img src={
        pet.photo
          ? pet.photo
          : `So sad, no pet photo`
      }
      alt="photo of your pet"
      className="card-img-top"
      style={{ width: "640px" }}
      />
      <button></button>
    </div>
  )
}