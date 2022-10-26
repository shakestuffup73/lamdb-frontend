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
          {/* <h1>{vetDetails?.map((vetDetail) => { */}
            return <h2 value={vetDetails._id} key={vetDetails._id}>{vetDetails.name}</h2>
          {/* })}</h1> */}
        </header>
      </article>
    </main>
  )
}

export default VetDetails