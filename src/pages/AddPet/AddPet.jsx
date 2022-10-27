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
				<label htmlFor="name-input">
					Pet's Name (required)
				</label>
				<br></br>
				<input 
					type="text"
					id="name-input"
					name="petName"
					value={formData.petName}
					onChange={handleChange}
					required
				/>
				<br></br>
				<label htmlFor="species-input">
					Species (required)
				</label>
				<br></br>
				<input 
					type="text"
					id="species-input"
					name="species"
					value={formData.species}
					onChange={handleChange}
					required
				/>
				<br></br>
				<label htmlFor="color-input">
					Color
				</label>
				<br></br>
				<input 
					type="text"
					id="color-input"
					name="color"
					value={formData.color}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="breed-input">
					Breed
				</label>
				<br></br>
				<input 
					type="text"
					id="breed-input"
					name="breed"
					value={formData.breed}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="age-input">
					Age
				</label>
				<br></br>
				<input 
					type="text"
					id="age-input"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="weight-input">
					Weight (in pounds)
				</label>
				<br></br>
				<input 
					type="text"
					id="weight-input"
					name="weight"
					value={formData.weight}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="behaviorNotes-input">
					Behavior Notes
				</label>
				<br></br>
				<textarea 
					type="text"
					cols="27"
					rows="10"
					id="behaviorNotes-input"
					name="behaviorNotes"
					value={formData.behaviorNotes}
					onChange={handleChange}
				/>
				<br></br>
				<label htmlFor="allergies-input">
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
				<label htmlFor="microchipLink-input">
					Microchip Link
				</label>
				<br></br>
				<input 
					type="text"
					id="microchipLink-input"
					name="microchipLink"
					value={formData.microchipLink}
					onChange={handleChange}
				/>
				<br></br>
				<br></br>
				<label htmlFor="photo-upload">
					Upload Pet Photo
				</label>
				<br></br>
				<input
					type="file"
					className={styles.addPicBtn}
					id="photo-upload"
					name="photo"
					onChange={handleChangePhoto}
				/>
				<br></br>
				<br></br>
				<button
					type="submit"
					disabled={!validForm}
					className={styles.addPetBtn}
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