import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'

import styles from '../../pages/AddEmergencyContact/AddEmergencyContact.module.css'

const AddEmergencyContact = (props) => {
	const { state } =useLocation()
	console.log('this is add emergency state', state);
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
    props.handleAddEmergencyContact(state, formData)
  }

  return ( 
    <>
      <div className={styles.addContactContainer}>
        <h3>Add Emergency Contact Here</h3>
      </div>
      <div>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
			<div className={styles.contactForm}>
				<label htmlFor="name-input">
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
        <label htmlFor="name-input">
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
        <label htmlFor="name-input">
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
			<div className={styles.btnDiv}>
      <button
          onClick={() => props.handleAddEmergencyContact}
					type="submit"
					disabled={!validForm}
          onChange={handleChange}
					className={styles.emergencyContactBtn}
				>
					Add Emergency Contact
				</button>
			</div>
      </form>
    </div>
    </>
  )
}

export default AddEmergencyContact