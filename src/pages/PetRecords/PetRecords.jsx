import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as vetService from '../../services/vetService'
import VetRecordCard from "../../components/VetRecordCard/VetRecordCard";
import styles from './PetRecords.module.css'

const PetRecords = () => {
  const { id } = useParams()

  console.log('this is the PetRecords id', id);

  const [records, setRecords] = useState([])
  
  useEffect(() => {
    const fetchRecords = async () => {
      const data = await vetService.show(id)
      setRecords(data)
    }
    fetchRecords()
  }, [id])

  const handleDeleteVet = async recordId => {
    const deletedRecord = await vetService.deleteOne(recordId)
    setRecords(records.filter(record => record._id !== deletedRecord._id))
  }
  
  return ( 
    records?.length &&
    <main>
      <article>
        <header>
          <h1>This is the Pet Records Page!</h1>
          <div className={styles.displayCards}>
            {records?.map(record => 
              <div key={record._id} className={styles.recordContainer}>
                <VetRecordCard record={record}/>
                <button onClick={() => handleDeleteVet(record._id)}>Delete Vet Record</button>
              </div>
            )}
          </div>
        </header>
      </article>
    </main>
  );
}

export default PetRecords;