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
			console.log('this is formData on AddVet', formData);
      props.handleAddVet(formData)
    } 

  return ( 
    <>
		<div className={styles.titleDiv}>
    <h1> Add a Vet Visit Here</h1>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
			<select name="pet" style={{width: "90px"}} onChange={handleChange}>
				{props.pets.map((pet) => { 
				return <option key={pet._id} value={pet._id}>{pet.petName}</option>
			})}
			</select>
		<div className={styles.formContainer}>
				<div className={styles.petFormFont}>
					<label htmlFor="name-input" className="form-label">
						Vet Name (required)
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="contact-input" className="form-label">
						Vet Contact Info (required)
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="contact-input"
						name="contact"
            value={formData.contact}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="description-input" className="form-label">
						Vet Visit Description
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="diagnosis-input" className="form-label">
						Diagnosis
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="diagnosis-input"
						name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="results-input" className="form-label">
						Results
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="results-input"
						name="results"
            value={formData.results}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="medications-input" className="form-label">
						Medications
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="medications-input"
						name="medications"
            value={formData.medications}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="weight-input" className="form-label">
						Pet Weight
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="weight-input"
						name="weight"
            value={formData.weight}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="cost-input" className="form-label">
						Vet Visit Cost
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="cost-input"
						name="cost"
            value={formData.cost}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="appointment-input" className="form-label">
						Follow-Up Appointment
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="appointment-input"
						name="appointment"
            value={formData.appointment}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="rabies-input" className="form-label">
						Rabies Follow-Up
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="rabies-input"
						name="rabies"
            value={formData.rabies}
            onChange={handleChange}
					/>
				</div>
			
				<div className="d-grid">
				<br></br>
					<button
						type="submit"
            disabled={!validForm}
						className={styles.addVetBtn}
					>
						Add Vet Visit
					</button>
				</div>
			</div>
			</form>
			</div>
		</>
  );
}

export default AddVet;