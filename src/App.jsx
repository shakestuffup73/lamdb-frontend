// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import MyProfile from './pages/MyProfile/MyProfile'
import AddPet from './pages/AddPet/AddPet'
import AddVet from './pages/AddVet/AddVet'
import PetDetails from './pages/PetDetails/PetDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as petService from './services/petService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())

  const [pets, setPets] = useState([])
  
  const navigate = useNavigate()

  useEffect(() => {
    console.log('this is pets', pets);
  }, [pets])

  const handleAddPet = async (newPetData, photo) => {
    const newPet = await petService.create(newPetData)
    if (photo) {
      newPet.photo = await petPhotoHelper(photo, newPet._id)
    }
    setPets([...pets, newPet])
    navigate('/my-profile')
  }

  const petPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await petService.addPhoto(photoData, id)
  }

	const handleDeletePet = async id => {
    const deletedPet = await petService.deleteOne(id)
    setPets(pets.filter(pet => pet._id !== deletedPet._id))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute user={user}>
              <MyProfile handleAddPet={handleAddPet} handleDeletePet={handleDeletePet} pets={pets} /> 
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route path='/petDetails' element={<PetDetails pets={pets} handleDeletePet={handleDeletePet} />} />
        <Route path='/addVet' element={<AddVet />} />
        <Route path='/addPet' element={<AddPet handleAddPet={handleAddPet} handleDeletePet={handleDeletePet} pets={pets}/>} />
      </Routes>
    </>
  )
}

export default App
