import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import * as petService from '../../services/petService'
import styles from './EditPet.module.css'

const EditPet = (props) => {
  const { id } = useParams()
  const [form, setForm] = useState({})
	const [updatePhotoData, setUpdatePhotoData] = useState({})

	useEffect(() => {
    const fetchPet = async () => {
      const data = await petService.show(id)
      setForm(data)
    }
    fetchPet()
  }, [id])

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdatePet(form, updatePhotoData.photo)
  }

  const handleUpdatePhoto = evt => {
		setUpdatePhotoData({ photo: evt.target.files[0] })
	}

  return (
		<>
			<div className={styles.titleDiv}>
        <h1>Update Pet Profile</h1>
			</div>
			<div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.petFormFont}>
        <label htmlFor="name-input">
						Pet's Name (required)
					</label>
					<br></br>
					<input 
						type="text"
						id="name-input"
						name="petName"
            value={form.petName}
            onChange={handleChange}
						required
						/>
				</div>
				<div>
					<label htmlFor="species-input">
						Species (required)
					</label>
					<br></br>
					<input 
						type="text"
						id="species-input"
						name="species"
            value={form.species}
            onChange={handleChange}
						required
						/>
				</div>
				<div>
					<label htmlFor="color-input">
						Color
					</label>
					<br></br>
					<input 
						type="text"
						id="color-input"
						name="color"
            value={form.color}
            onChange={handleChange}
					/>
				</div>
        <div>
					<label htmlFor="breed-input">
						Breed
					</label>
					<br></br>
					<input 
						type="text"
						id="breed-input"
						name="breed"
            value={form.breed}
            onChange={handleChange}
						/>
				</div>
        <div>
					<label htmlFor="age-input">
						Age
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="age-input"
						name="age"
            value={form.age}
            onChange={handleChange}
					/>
				</div>
        <div>
					<label htmlFor="weight-input">
						Weight (in pounds)
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="weight-input"
						name="weight"
            value={form.weight}
            onChange={handleChange}
						/>
				</div>
        <div>
					<label htmlFor="behaviorNotes-input">
						Behavior Notes
					</label>
					<br></br>
					<textarea 
						type="text"
						className="form-control"
						cols="20"
						rows="10"
						id="behaviorNotes-input"
						name="behaviorNotes"
            value={form.behaviorNotes}
            onChange={handleChange}
						/>
				</div>
        <div>
					<label htmlFor="allergies-input">
						Allergies
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="allergies-input"
						name="allergies"
            value={form.allergies}
            onChange={handleChange}
						/>
				</div>
        <div>
					<label htmlFor="microchipLink-input">
						Microchip Link
					</label>
					<br></br>
					<input 
						type="text"
						className="form-control"
						id="microchipLink-input"
						name="microchipLink"
            value={form.microchipLink}
            onChange={handleChange}
						/>
				</div>
				<div>
					<label htmlFor="photo-upload">
          {updatePhotoData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<br></br>
					<input
						type="file"
						id="photo-upload"
						name="photo"
						onChange={handleUpdatePhoto}
						/>
				</div>
				<div>
					<button type="submit" className={styles.updateBtn}>Update Pet</button>
				</div>
      </form>
			</div>
		</>
		)
	}
	
	export default EditPet;