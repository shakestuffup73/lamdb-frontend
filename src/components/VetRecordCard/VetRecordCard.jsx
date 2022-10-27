const VetRecordCard = ({ record }) => {

  return (
    <>
      <div>
        <h3>{record.name}</h3>
        <h3>{record.contact}</h3>
        <h3>{record.description}</h3>
        <h3>{record.diagnosis}</h3>
        <h3>{record.results}</h3>
        {/* <h3>{vet.medications}</h3>
        <h3>{vet.weight}</h3>
        <h3>{vet.cost}</h3>
        <h3>{vet.appointment}</h3>
        <h3>{vet.rabies}</h3> */}
      </div>
    </>
  )
}

export default VetRecordCard