import { useParams, Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react'
import * as emergencyService from '../../services/emergencyService'

const EmergencyContactDetails = ({ emergencyContact }) => {
  const { id } = useParams()
  // console.log('this is emergencydetails pet', id);


  const [contact, setContact] = useState([])

  const handleDeleteEmergencyContact = async (cId) => {
    const deletedContact = await emergencyService.deleteOne(id, cId)
    console.log(deletedContact)
    setContact(contact.filter(c => c._id !== cId))

  }
  


  useEffect(() => {
    const fetchContact = async () => {
      const data = await emergencyService.show(id)
      console.log('this is data', data)
      setContact(data.emergencyContact)
    }
    fetchContact()
  }, [id])

  console.log('this is contact in emergencyContactDetails', contact);
  
  return (
    <>
    <main>
      <div>
        <h1>Emergency Contacts</h1>
        {contact?.length
          ? contact.map(contact => 
          <div key={contact._id}>
            <h1>{contact?.name}</h1>
            <h1>{contact?.phoneNumber}</h1>
            <h1>{contact?.email}</h1>
            <button onClick={() => handleDeleteEmergencyContact(contact._id)}>Delete Contact</button>
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
