import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as vetService from '../../services/vetService'

import VetRecordCard from "../../components/VetRecordCard/VetRecordCard";

const PetRecords = () => {
  const { id } = useParams()

  const [records, setRecords] = useState([])
  
  useEffect(() => {
    const fetchRecords = async () => {
      const data = await vetService.show(id)
      setRecords(data)
    }
    fetchRecords()
  }, [id])

  const handleDeleteVet = async id => {
    const deletedRecord = await vetService.deleteOne(id)
    setRecords(records.filter(record => record._id !== deletedRecord._id))
  }
  
  return ( 
    records?.length &&
    <main styles={{marginTop: "200px"}}>
      <article>
        <header>
          <h1>This is the Pet Records Page!</h1>
          {records?.map(record => 
            <div key={record._id}>
              <VetRecordCard record={record}/>
              <button onClick={() => handleDeleteVet(record._id)}>Delete Vet Record</button>
            </div>
          )}
        </header>
      </article>
    </main>
  );
}

export default PetRecords;