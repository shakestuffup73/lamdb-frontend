import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main>
      <div className={styles.landingDiv}>
        <div className={styles.titleDiv}>
          <h1>Hi, {user ? user.name : 'hooman'}</h1>
          <h1 className={styles.landingNavyText}>Welcome to LAMdb</h1>
          <img src="assets/sheep.png" alt="cartoon sheep face" height="200px" />
        </div>
        <div className={styles.landingDiv2}>
          <h2>Vet Records Management</h2>
        </div>
      </div>
    </main>
  )
}

export default Landing
