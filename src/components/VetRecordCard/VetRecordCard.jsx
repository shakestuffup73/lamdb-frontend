import styles from './VetRecord.module.css'

const VetRecordCard = ({ record }) => {

  return (
    <>
      <div>
        <h3>Vet Name:
          <br>
          </br>
          {record.name}
        </h3>
        <h3>Vet Contact Info: 
        <br>
        </br>
          {record.contact}
        </h3>
        <h3>Vet Visit Description: 
        <br>
        </br>
          {record.description}
        </h3>
        <h3>Diagnosis: 
        <br>
        </br>
          {record.diagnosis}
        </h3>
        <h3>Results:
        <br>
        </br>
          {record.results}
        </h3>
        <h3>Medications:
        <br>
        </br>
          {record.medications}
        </h3>
        <h3>Pet Weight:
        <br>
        </br>
          {record.weight}
        </h3>
        <h3>Vet Visit Cost:
        <br>
        </br>
          {record.cost}
        </h3>
        <h3>Follow-Up Appointment: 
        <br>
        </br>
          {record.appointment}
        </h3>
        <h3>Rabies Follow-Up: 
        <br>
        </br>
          {record.rabies}
        </h3>
      </div>
    </>
  )
}

export default VetRecordCard