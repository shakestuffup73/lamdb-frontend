const VetRecordCard = ({ record }) => {

  return (
    <>
      <div>
        <h3>{record.name}</h3>
        <h3>{record.contact}</h3>
        <h3>{record.description}</h3>
        <h3>{record.diagnosis}</h3>
        <h3>{record.results}</h3>
        <h3>{record.medications}</h3>
        <h3>{record.weight}</h3>
        <h3>{record.cost}</h3>
        <h3>{record.appointment}</h3>
        <h3>{record.rabies}</h3>
      </div>
    </>
  )
}

export default VetRecordCard