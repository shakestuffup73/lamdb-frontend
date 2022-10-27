import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/pets`

async function create(pet) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(pet)
  })
  return res.json()
}

async function addPhoto(photoData, petId) {
  const res = await fetch(`${BASE_URL}/${petId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData,
  })
  return await res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

const show = async (id) => {
  console.log("this is the show id", id);
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getPets = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (petData) => {
  try {
    const res = await fetch(`${BASE_URL}/${petData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(petData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  create,
  addPhoto,
  deleteOne,
  show,
  update,
  getPets
}