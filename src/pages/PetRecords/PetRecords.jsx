import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as vetService from '../../services/vetService'

import VetRecordCard from "../../components/VetRecordCard/VetRecordCard";

const PetRecords = ({ vets }) => {
  const { id } = useParams()

  console.log('this is vets on PetRecords view', vets)

  const [record, setRecord] = useState([])
  
  useEffect(() => {
    const fetchRecord = async () => {
      const data = await vetService.show(id)
      setRecord(data)
    }
    fetchRecord()
  }, [id])
  
  console.log('this is record on petRecords', record)

  return ( 
    vets?.length &&
    <main>
      <article>
        <header>
          <h1>This is the Pet Records Page!</h1>
          {vets?.map(vet => 
            <div key={vet._id}>
              <VetRecordCard vet={vet}/>
            </div>
          )}
        </header>
      </article>
    </main>
  );
}

export default PetRecords;