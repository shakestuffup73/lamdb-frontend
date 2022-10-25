import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditPet = (props) => {
  const { state } = useLocation()

  const [form, setForm] = useState(state)

	const [updatePhotoData, setUpdatePhotoData] = useState({})

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
    <main style={{marginTop: '200px'}}>
      <form onSubmit={handleSubmit}>
        <h1>Update Pet Details</h1>
        <div className="form-group mb-3">
        <label htmlFor="name-input" className="form-label">
						Pet's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="petName"
            value={form.petName}
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
            value={form.species}
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
            value={form.color}
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
            value={form.breed}
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
            value={form.age}
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
            value={form.weight}
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
            value={form.behaviorNotes}
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
            value={form.allergies}
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
            value={form.microchipLink}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
          {updatePhotoData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleUpdatePhoto}
					/>
				</div>
				<div className="d-grid">
					<button type="submit">Update Pet</button>
				</div>
      </form>
    </main>
  )
}

export default EditPet;




// return (  
//   <h1 style={{marginTop: '200px'}}>This is my Edit Pet view</h1>
// );