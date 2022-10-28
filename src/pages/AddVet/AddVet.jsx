import { useState, useRef, useEffect } from "react"
import styles from './AddVet.module.css'

const AddVet = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    description: '',
    diagnosis: '',
    results: '',
    medications: '',
    weight: '',
    cost: '',
    appointment: '',
    rabies: '',
		pet: props.pets[0]._id
  })
	
    const [validForm, setValidForm] = useState(false)
  
    const handleChange = evt => {
      setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const formElement = useRef()
  
    useEffect(() => {
      formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
		}, [formData])
    
    const handleSubmit = evt => {
      evt.preventDefault()
      props.handleAddVet(formData)
    } 

  return ( 
    <>
		<div className={styles.addVetDiv}>
			<div className={styles.titleDiv}>
				<h1> Add a Vet Visit Here</h1>
			</div>
			<div className={styles.formContainer}>
				<form autoComplete="off" ref={formElement} onSubmit={handleSubmit} className={styles.addPetForm}>
					<select name="pet" style={{width: "90px"}} onChange={handleChange}>
					{props.pets.map((pet) => { 
						return <option key={pet._id} value={pet._id}>{pet.petName}</option>
					})}
					</select>
					<br></br>
					<br></br>
					<div className={styles.petFormFont}>
						<label htmlFor="name-input">Vet Name (required)</label>
						<br></br>
						<input 
							type="text"
							id="name-input"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<br></br>
						<label htmlFor="contact-input">Vet Contact Info (required)</label>
						<br></br>
						<textarea 
							type="text"
							id="contact-input"
							name="contact"
							cols="20"
							rows="2"
							value={formData.contact}
							onChange={handleChange}
							required
						/>
						<br></br>
						<label htmlFor="description-input">Vet Visit Description</label>
						<br></br>
						<textarea 
							type="text"
							id="description-input"
							name="description"
							cols="20"
							rows="6"
							value={formData.description}
							onChange={handleChange}
						/>
						<label htmlFor="diagnosis-input">Diagnosis</label>
						<br></br>
						<textarea 
							type="text"
							id="diagnosis-input"
							name="diagnosis"
							cols="20"
							rows="6"
							value={formData.diagnosis}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="results-input">Results</label>
						<br></br>
						<textarea
							type="text"
							id="results-input"
							name="results"
							cols="20"
							rows="6"
							value={formData.results}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="medications-input">Medications</label>
						<br></br>
						<textarea 
							type="text"
							id="medications-input"
							name="medications"
							cols="20"
							rows="4"
							value={formData.medications}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="weight-input">Pet Weight</label>
						<br></br>
						<input 
							type="text"
							id="weight-input"
							name="weight"
							value={formData.weight}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="cost-input">Vet Visit Cost</label>
						<br></br>
						<input 
							type="text"
							id="cost-input"
							name="cost"
							value={formData.cost}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="appointment-input">Follow-Up Appointment</label>
						<br></br>
						<input 
							type="text"
							id="appointment-input"
							name="appointment"
							value={formData.appointment}
							onChange={handleChange}
						/>
						<br></br>
						<label htmlFor="rabies-input">Rabies Follow-Up</label>
						<br></br>
						<input 
							type="text"
							id="rabies-input"
							name="rabies"
							value={formData.rabies}
							onChange={handleChange}
						/>
					<br></br>
						<button
							type="submit"
							disabled={!validForm}
							className={styles.addVetBtn}
						>
							Add Vet Visit
						</button>
					</div>
				</form>
				</div>
			</div>
		</>
  );
}

export default AddVet;