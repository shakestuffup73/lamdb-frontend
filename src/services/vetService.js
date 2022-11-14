import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/vets`

async function create(vetData) {
  try {const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(vetData)
  })
  return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteOne(vetId) {
  const res = await fetch(`${BASE_URL}/${vetId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
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

const getVets = async (petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  create,
  getVets,
  show,
  deleteOne,
}