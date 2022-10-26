import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components

// styles
import styles from "./PetDetails.module.css"

// services
import * as petService from '../../services/petService'


const PetDetails = ({ vet, handleDeletePet }) => {
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
        <h3>{petDetails.species}</h3>
        <h3>{petDetails.color}</h3>
        <h3>{petDetails.breed}</h3>
        <h3>{petDetails.age}</h3>
        <h3>{petDetails.weight}</h3>
        <h3>{petDetails.behaviorNotes}</h3>
        <h3>{petDetails.allergies}</h3>
        <h3>{petDetails.microchipLink}</h3>
        {/* <h3>{petDetails?.color}</h3> */}
      </div>
      <div className={styles.linksDiv}>
        <Link to={`/pets/${id}/edit`}>Edit Pet Details</Link>
        <Link to={`/vetDetails/${id}`}>View Vet Records</Link>
      </div>
      <div className={styles.btnDiv}>
        <button className={styles.deleteBtn} onClick={() => handleDeletePet(id)}>Delete Pet</button>
      </div>
    </main>
  )
}

export default PetDetails