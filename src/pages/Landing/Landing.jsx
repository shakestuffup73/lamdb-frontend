import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main>
      <div className={styles.landingDiv}>
        <h1>Hi, {user ? user.name : 'hooman'}</h1>
        <h1>Welcome to LAMdb</h1>
      </div>
    </main>
  )
}

export default Landing
