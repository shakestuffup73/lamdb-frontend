const VetRecordCard = ({ record }) => {

  return (
    <>
      <div>
        <h3>Vet Name: {record.name}</h3>
        <h3>Vet Contact Info: {record.contact}</h3>
        <h3>Vet Visit Description: {record.description}</h3>
        <h3>Diagnosis: {record.diagnosis}</h3>
        <h3>Results{record.results}</h3>
        <h3>Medications:{record.medications}</h3>
        <h3>Pet Weight:{record.weight}</h3>
        <h3>Vet Visit Cost:{record.cost}</h3>
        <h3>Follow-Up Appointment: {record.appointment}</h3>
        <h3>Rabies Follow-Up: {record.rabies}</h3>
      </div>
    </>
  )
}

export default VetRecordCard