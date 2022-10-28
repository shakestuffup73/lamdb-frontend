import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h4>Sign Up</h4>
      <p>{message}</p>
      <div className={styles.signupdiv}>
        <SignupForm {...props} updateMessage={updateMessage} />  
      </div> 
    </main>
  )
}

export default Signup
