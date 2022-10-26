import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hi, {user ? user.name : 'hooman'}</h1>
      <h1>Welcome to LAMdb</h1>
    </main>
  )
}

export default Landing
