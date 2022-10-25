import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// components

// services
import * as vetService from '../../services/vetService'

const VetDetails = (props) => {
  const { id } = useParams()
  const [vetDetails, setVetDetails] = useState(null)

  useEffect(() => {
    const fetchVet = async () => {
      const data = await vetService.show(id)
      setVetDetails(data)
    }
    fetchVet()
  }, [id])

  

  // if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
         <h1>Hi this is the vet records page!</h1>
        </header>
      </article>
    </main>
  )
}

export default VetDetails