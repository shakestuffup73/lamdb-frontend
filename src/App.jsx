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
import VetDetails from './pages/VetDetails/VetDetails'
import EditPet from './pages/EditPet/EditPet'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as petService from './services/petService'
import * as vetService from './services/vetService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  // setting state
  const [user, setUser] = useState(authService.getUser())
  const [pets, setPets] = useState([])
  const [vets, setVets] = useState([])
  const navigate = useNavigate()
  const [profile, setProfile] = useState([])

  // use effects
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getMyProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  useEffect(() => {
    console.log('this is pets', pets);
  }, [pets])

  // functions for pet and vet
  const handleAddPet = async (newPetData, photo) => {
    const newData = await petService.create(newPetData)
    if (photo) {
      newData.pet.photo = await petPhotoHelper(photo, newData.pet._id)
    }
    // setPets([...pets, newPet])
    setProfile(newData.updatedProfile)
    navigate('/my-profile')
  }

  const handleUpdatePet = async (updatedPet, photo) => {
    const updatedPuppy = await petService.update(updatedPet)
    if (photo) {
      updatedPuppy.photo = await petPhotoHelper(photo, updatedPet._id)
    }
    const newPetsArray = pets.map(puppy => 
      puppy._id === updatedPuppy._id ? updatedPuppy : puppy
    )
    setPets(newPetsArray)
		navigate('/my-profile')
  }

  const handleAddVet = async (newVetData) => {
    const newVet = await vetService.create(newVetData)
      setVets([...vets, newVet])
      navigate('/vetDetails/:id')
  }

  const petPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await petService.addPhoto(photoData, id)
  }

	const handleDeletePet = async id => {
    const deletedPet = await petService.deleteOne(id)
    setPets(pets.filter(pet => pet._id !== deletedPet._id))
    navigate('/my-profile')
  }

  const handleDeleteVet = async id => {
    const deletedVet = await vetService.deleteOne(id)
    setVets(vets.filter(vet => vet._id !== deletedVet._id))
    navigate('/petDetails/:id')
  }

  // user login log out functions
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
              <MyProfile profile={profile} handleAddPet={handleAddPet} handleDeletePet={handleDeletePet} pets={pets} /> 
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
        <Route path='/addPet' element={<AddPet handleAddPet={handleAddPet} handleDeletePet={handleDeletePet} pets={pets}/>} />
        <Route path='/petDetails/:id' element={<PetDetails profile={profile} pets={pets} handleDeletePet={handleDeletePet} />} />
        <Route path='/pets/:id/edit' element={<EditPet pets={pets} handleUpdatePet={handleUpdatePet}/>} />
        <Route path='/addVet' element={<AddVet handleAddVet={handleAddVet} pets={pets} vets={vets} />} />
        <Route path='/vetDetails/:id' element={<VetDetails pets={pets} vets={vets} handleDeleteVet={handleDeleteVet} />} />
      </Routes>
    </>
  )
}

export default App
