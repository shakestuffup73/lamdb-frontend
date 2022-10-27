import { useParams, Link } from "react-router-dom"

const EmergencyContactDetails = ({ emergencyContact, handleDeleteEmergencyContact }) => {
  const { id } = useParams()
  // console.log('this is emergencydetails pet', id);
  return (
    <main>
      <div>
        <h1>Emergency Contact</h1>
        <h1>{emergencyContact?.name}</h1>
        <h1>{emergencyContact?.phoneNumber}</h1>
        <h1>{emergencyContact?.email}</h1>
      </div>
      <Link to={`/emergency-contact`} state={id}>Add Emergency Contact</Link>
      <button onClick={() => handleDeleteEmergencyContact(id)}>Delete Contact</button>
    </main>
  )
}

export default EmergencyContactDetails
