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
    <>
    <main>
      <div>
        <h1>Emergency Contacts</h1>
        {contact.emergencyContact?.length
          ? contact.emergencyContact.map(contact => 
          <div key={contact._id}>
            <h1>{contact?.name}</h1>
            <h1>{contact?.phoneNumber}</h1>
            <h1>{contact?.email}</h1>
            <button onClick={() => handleDeleteEmergencyContact(id)}>Delete Contact</button>
          </div>
          )
          : <p>No Emergency Contacts Added Yet</p>
        }
      </div>
      <Link to={`/emergency-contact`} state={id}>Add Emergency Contact</Link>
    </main>
    </>
  )
}

export default EmergencyContactDetails
