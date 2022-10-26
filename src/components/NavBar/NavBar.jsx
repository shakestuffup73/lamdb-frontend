import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul className={styles.navUl}>
          <li>Welcome BAHHHck, {user.name}</li>
          <li><Link to="/my-profile" className={styles.navLink}>My Pets</Link></li>
          <li><Link to="/addVet" className={styles.navLink}>Add Vet Visit</Link></li>
          <li><Link to="/addPet" className={styles.navLink}>Add Pet</Link></li>
          <li><Link to="/changePassword" className={styles.navLink}>Change Password</Link></li>
          <li>
            <Link to="" onClick={handleLogout} className={styles.navLink}><img src="./assets/sheep.png" alt="cartoon sheep face" width="30px" />BAHHHbye</Link>
          </li>
        </ul>
      :
        <ul className={styles.navUl}>
          <li><Link to="/login" className={styles.navLink}>Log In</Link></li>
          <li><Link to="/signup" className={styles.navLink}>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
