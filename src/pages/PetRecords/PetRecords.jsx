import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as vetService from '../../services/vetService'
import VetRecordCard from "../../components/VetRecordCard/VetRecordCard";
import styles from './PetRecords.module.css'

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

  const handleDeleteVet = async recordId => {
    const deletedRecord = await vetService.deleteOne(recordId)
    setRecords(records.filter(record => record._id !== deletedRecord._id))
  }
  
  return (
    <>
    <div className={styles.recordsDiv}>
        <h2>Vet Records</h2>
        {records?.length ?
          <div className={styles.displayCards}>
            {records?.map(record => 
              <div key={record._id} className={styles.recordContainer}>
                <VetRecordCard record={record}/>
                <button onClick={() => handleDeleteVet(record._id)} className={styles.deleteBtn}>Delete Vet Record</button>
              </div>
            )}
          </div>
          :
          <div className={styles.noRecords}>
            <h5>No Vet Records to Display</h5>
          </div>
        }
      </div>
    </>
  );
}

export default PetRecords;