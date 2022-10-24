import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {user ? user.name : 'hooman'}</h1>
    </main>
  )
}

export default Landing
