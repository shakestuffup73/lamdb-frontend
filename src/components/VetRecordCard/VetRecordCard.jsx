const VetRecordCard = ({ vet}) => {

  return (
    <>
      <div>
        <h3>{vet.name}</h3>
        <h3>{vet.contact}</h3>
        <h3>{vet.description}</h3>
        <h3>{vet.diagnosis}</h3>
        <h3>{vet.results}</h3>
        <h3>{vet.medications}</h3>
        <h3>{vet.weight}</h3>
        <h3>{vet.cost}</h3>
        <h3>{vet.appointment}</h3>
        <h3>{vet.rabies}</h3>
      </div>
    </>
  )
}

export default VetRecordCard