import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/pets`

async function create(emergencyContact, petId) {
  const res = await fetch(`${BASE_URL}/${petId}/emergency-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(emergencyContact)
  })
  return res.json()
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getEmergencyContact = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteOne(petId, ecId) {
  const res = await fetch(`${BASE_URL}/${petId}/emergencyContact/${ecId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  create,
  show,
  getEmergencyContact,
  deleteOne,
}