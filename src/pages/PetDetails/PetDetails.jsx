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
      <h1 style={{marginTop: '200px'}}>This is the Pet Details page</h1>
        <h1>{petDetails?.petName}</h1>
        <Link to={`/pets/${id}/edit`} state={petDetails}>Edit Pet Details</Link>
        <Link to={`/vetDetails/${id}`}>View Vet Records</Link>
        <button onClick={() => handleDeletePet(id)}>DELETE PET</button>
    </main>
  )
}

export default PetDetails