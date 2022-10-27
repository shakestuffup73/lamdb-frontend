import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'

const AddEmergencyContact = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '', 
    email: '',
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
    props.handleAddEmergencyContact(formData)
  }

  return ( 
    <>
      <div>
        <h1>Add Emergency Contact Here</h1>
      </div>
      <div>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
			<div>
				<label htmlFor="name-input" className="form-label">
					Emergency Contact Name
				</label>
        <input 
					type="text"
					className="form-control"
					id="name-input"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
        <label htmlFor="name-input" className="form-label">
					Phone Number
				</label>
        <input 
					type="text"
					className="form-control"
					id="name-input"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
					required
				/>
        <label htmlFor="name-input" className="form-label">
					Email
				</label>
        <input 
					type="text"
					className="form-control"
					id="email-input"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
      </div>
      <button
          onClick={() => props.handleAddEmergencyContact}
					type="submit"
					className="btn btn-primary btn-fluid"
					disabled={!validForm}
          onChange={handleChange}
				>
					Add Emergency Contact
				</button>
      </form>
    </div>
    </>
  )
}

export default AddEmergencyContact