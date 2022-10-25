import { useState, useRef, useEffect } from "react"
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import styles from './AddPet.module.css'
import * as petService from '../../services/petService'
import MyProfile from "../MyProfile/MyProfile"

const AddPet = (props) => {

  const [pets, setPets] = useState([])

  const navigate = useNavigate()

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

  const handleAddPet = async (newPetData, photo) => {
    const newPet = await petService.create(newPetData)
    if (photo) {
      newPet.photo = await petPhotoHelper(photo, newPet._id)
    }
    setPets([...pets, newPet])
    navigate('/my-profile')
  }

  const petPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await petService.addPhoto(photoData, id)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddPet(formData, photoData.photo)
  }

	const handleDeletePet = async id => {
    const deletedPet = await petService.deleteOne(id)
    setPets(pets.filter(pet => pet._id !== deletedPet._id))
  }


  return ( 
    <>
    <div className={styles.titleDiv}>
      <h1>Add a Pet Here</h1>
    </div>
    <div className={styles.formContainer}>
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Pet's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="petName"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="species-input" className="form-label">
						Species (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="species-input"
						name="species"
            value={formData.species}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="color-input" className="form-label">
						Color
					</label>
					<input 
						type="text"
						className="form-control"
						id="color-input"
						name="color"
            value={formData.color}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="breed-input" className="form-label">
						Breed
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
            value={formData.breed}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Age
					</label>
					<input 
						type="text"
						className="form-control"
						id="age-input"
						name="age"
            value={formData.age}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="weight-input" className="form-label">
						Weight (in pounds)
					</label>
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
					<label htmlFor="behaviorNotes-input" className="form-label">
						Behavior Notes
					</label>
					<input 
						type="text"
						className="form-control"
						id="behaviorNotes-input"
						name="behaviorNotes"
            value={formData.behaviorNotes}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="allergies-input" className="form-label">
						Allergies
					</label>
					<input 
						type="text"
						className="form-control"
						id="allergies-input"
						name="allergies"
            value={formData.allergies}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="microchipLink-input" className="form-label">
						Microchip Link
					</label>
					<input 
						type="text"
						className="form-control"
						id="microchipLink-input"
						name="microchipLink"
            value={formData.microchipLink}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Pet Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Pet
					</button>
					<div style={{display:"none"}}>
					<MyProfile handleDeletePet={handleDeletePet}/>
					</div>
				</div>
			</form>
    </div>
    </>
  );
}

export default AddPet;