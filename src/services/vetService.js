import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/vets`

async function create(vet) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(vet)
  })
  return res.json()
}

// async function deleteOne(vetId) {
//   const res = await fetch(`${BASE_URL}/${vetId}`, {
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`
//     }
//   })
//   return res.json()
// }

const show = async (id) => {
  console.log("this is the show id", id);
  try {
    // GET http://localhost:3001/api/vets/:id
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getVets = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// const update = async (vetData) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${vetData._id}`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(vetData)
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }





export {
  create,
  getVets,
  show
}