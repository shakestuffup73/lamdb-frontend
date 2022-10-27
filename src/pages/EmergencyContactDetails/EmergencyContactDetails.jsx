import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as emergencyService from '../../services/emergencyService'

const EmergencyContactDetails = ({ emergencyContact, handleDeleteEmergencyContact }) => {
  const { id } = useParams()
  // console.log('this is emergencydetails pet', id);

  const [contact, setContact] = useState([])
  
  useEffect(() => {
    const fetchContact = async () => {
      const data = await emergencyService.show(id)
      setContact(data)
    }
    fetchContact()
  }, [id])

  console.log('this is contact in emergencyContactDetails', contact);
  
  return (
    contact.length &&
    <main>
      <div>
        <h1>Emergency Contact</h1>
          <h1>{contact.emergencyContact.name}</h1>
          <h1>{contact.emergencyContact.phoneNumber}</h1>
          <h1>{contact.emergencyContact.email}</h1>
      </div>
      <Link to={`/emergency-contact`} state={id}>Add Emergency Contact</Link>
      <button onClick={() => handleDeleteEmergencyContact(id)}>Delete Contact</button>
    </main>
  )
}

export default EmergencyContactDetails
