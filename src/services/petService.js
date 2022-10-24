import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/pets`

async function create(pet) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pet)
  })
  return res.json()
}

async function addPhoto(photoData, petId) {
  // PUT http://localhost:3001/api/pets/:id/add-photo
  const res = await fetch(`${BASE_URL}/${petId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData,
  })
  return await res.json()
}

export {
  create,
  addPhoto,
}