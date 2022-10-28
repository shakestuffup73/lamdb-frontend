import { useParams, Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react'
import * as emergencyService from '../../services/emergencyService'
import styles from './EmergencyContactDetails.module.css'

const EmergencyContactDetails = ({ emergencyContact }) => {
  const { id } = useParams()

  const [contact, setContact] = useState([])

  const handleDeleteEmergencyContact = async (cId) => {
    const deletedContact = await emergencyService.deleteOne(id, cId)
    setContact(contact.filter(c => c._id !== cId))
  }

  useEffect(() => {
    const fetchContact = async () => {
      const data = await emergencyService.show(id)
      setContact(data.emergencyContact)
    }
    fetchContact()
  }, [id])
  
  return (
    <>
    <div className={styles.contactsPage}>
      <h1>Emergency Contacts</h1>
      <div className={styles.emergencyContactContainer}>
        {contact?.length
          ? contact.map(contact => 
          <div key={contact._id} className={styles.contactDiv}>
            <h5>{contact?.name}</h5>
            <h5>{contact?.phoneNumber}</h5>
            <h5>{contact?.email}</h5>
            <button onClick={() => handleDeleteEmergencyContact(contact._id)}className={styles.deleteBtn}>Delete Contact</button>
          </div>
          )
          : <p>No Emergency Contacts Added</p>
        }
      </div>
      <Link to={`/emergency-contact`} state={id} className={styles.emergencyContactLink}>Add Emergency Contact</Link>
      </div>
    </>
  )
}

export default EmergencyContactDetails
