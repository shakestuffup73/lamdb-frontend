import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components

// styles
import styles from "./PetDetails.module.css"

// services
import * as petService from '../../services/petService'


const PetDetails = ({ handleDeletePet }) => {
  const { id } = useParams()

  const [petDetails, setPetDetails] = useState([])

  useEffect(() => {
    const fetchPet = async () => {
      const data = await petService.show(id)
      setPetDetails(data)
    }
    fetchPet()
  }, [id])

  return (
    <main>
      <div className={styles.titleDiv}>
        <h1>{petDetails?.petName}'s Profile</h1>
      </div>
      <div className={styles.detailsDiv}>
        <h4>Species: {petDetails.species}</h4>
        <h4>Color: {petDetails.color}</h4>
        <h4>Breed: {petDetails.breed}</h4>
        <h4>Age: {petDetails.age}</h4>
        <h4>Weight: {petDetails.weight}</h4>
        <h4>Behavior Notes: {petDetails.behaviorNotes}</h4>
        <h4>Allergies: {petDetails.allergies}</h4>
        <h4>Microchip Link: {petDetails.microchipLink}</h4>
      </div>
      <div className={styles.linksDiv}>
        <Link to={`/pets/${id}/edit`}>Edit Pet Details</Link>
        <Link to={`/petRecords/${id}`}>View Vet Records</Link>
      </div>
      <div className={styles.btnDiv}>
        <button className={styles.deleteBtn} onClick={() => handleDeletePet(id)}>Delete Pet</button>
      </div>
    </main>
  )
}

export default PetDetails