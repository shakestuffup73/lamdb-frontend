import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// components

// styles 
// import styles from "./VetDetails.module.css"

// services
import * as vetService from '../../services/vetService'

const VetDetails = () => {
  const { id } = useParams()

  const [vetDetails, setVetDetails] = useState([])

  useEffect(() => {
    const fetchVet = async () => {
      const data = await vetService.show(id)
      setVetDetails(data)
    }
    fetchVet()
  }, [id])
  // if (!blog) return <Loading />

  return (
    <main style={{marginTop: '200px'}}>
      <article>
        <header>
          <h1>Hi this is the vet records page!</h1>
          <h3>{vetDetails?.name}</h3>
          <h3>{vetDetails.contact}</h3>
          <h3>{vetDetails.description}</h3>
          <h3>{vetDetails.diagnosis}</h3>
          <h3>{vetDetails.results}</h3>
          <h3>{vetDetails.medications}</h3>
          <h3>{vetDetails.weight}</h3>
          <h3>{vetDetails.cost}</h3>
          <h3>{vetDetails.appointment}</h3>
          <h3>{vetDetails.rabies}</h3>
        </header>
      </article>
    </main>
  )
}

export default VetDetails