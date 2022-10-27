import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const EmergencyContactDetails = ({ pet, emergencyContact, handleAddEmergencyContact, handleDeleteEmergencyContact }) => {
  const { id } = useParams()

  return (
    <main>
      <div>
        <h1>Emergency Contact</h1>
        <h1>{emergencyContact?.name}</h1>
        <h1>{emergencyContact?.phoneNumber}</h1>
        <h1>{emergencyContact?.email}</h1>
      </div>
      <Link to={`/emergency-contact`}>Add Emergency Contact</Link>
      <button onClick={() => handleDeleteEmergencyContact(id)}>Delete Contact</button>
    </main>
  )
}

export default EmergencyContactDetails
