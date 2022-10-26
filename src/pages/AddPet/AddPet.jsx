import { useState, useRef, useEffect } from "react"
import styles from './AddPet.module.css'

const AddPet = (props) => {
  const [formData, setFormData] = useState({
    petName: '',
    species: '', 
    color: '',
    breed: '',
    age: '',
    weight: '',
    behaviorNotes: '',
    allergies: '',
    microchipLink: '',
  })

	const [photoData, setPhotoData] = useState({})

  const [validForm, setValidForm] = useState(false)

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
	const handleChangePhoto = evt => {
		setPhotoData({ photo: evt.target.files[0] })
	}

  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

	const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPet(formData, photoData.photo)
  }

  return ( 
    <>
    <div className={styles.titleDiv}>
      <h1>Add a Pet Here</h1>
    </div>
    <div className={styles.formContainer}>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} className={styles.addPetForm}>
			<div className={styles.petFormFont}>
				<label htmlFor="name-input" className="form-label">
					Pet's Name (required)
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="name-input"
					name="petName"
					value={formData.petName}
					onChange={handleChange}
					required
				/>
				<br></br>
				<label htmlFor="species-input" className="form-label">
					Species (required)
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="species-input"
					name="species"
					value={formData.species}
					onChange={handleChange}
					required
				/>
				<br></br>
				<label htmlFor="color-input" className="form-label">
					Color
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="color-input"
					name="color"
					value={formData.color}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="breed-input" className="form-label">
					Breed
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="breed-input"
					name="breed"
					value={formData.breed}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="age-input" className="form-label">
					Age
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="age-input"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="weight-input" className="form-label">
					Weight (in pounds)
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
				<br></br>
				<label htmlFor="behaviorNotes-input" className="form-label">
					Behavior Notes
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="behaviorNotes-input"
					name="behaviorNotes"
					value={formData.behaviorNotes}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="allergies-input" className="form-label">
					Allergies
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="allergies-input"
					name="allergies"
					value={formData.allergies}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="microchipLink-input" className="form-label">
					Microchip Link
				</label>
				<br></br>
				<input 
					type="text"
					className="form-control"
					id="microchipLink-input"
					name="microchipLink"
					value={formData.microchipLink}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="photo-upload"className="form-label">
					Upload Pet Photo
				</label>
				<br></br>
				<input
					type="file"
					className="form-control"
					id="photo-upload"
					name="photo"
					onChange={handleChangePhoto}
				/>
				<br></br>
				<button
					type="submit"
					className="btn btn-primary btn-fluid"
					disabled={!validForm}
				>
					Add Pet
				</button>
				</div>
			</form>
			</div>
    </>
  );
}

export default AddPet;