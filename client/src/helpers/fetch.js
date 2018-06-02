// fake fetch
const fetch = (url, { method }) => {
  if (method === 'GET') {
    return new Promise((resolve => resolve({ json() { return new Promise(resolve => resolve('get ok')) } })))
  }
  return new Promise((resolve => resolve({ json() { return new Promise(resolve => resolve('get ok')) } })))
}
export const post = async ({ url, body, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    console.log(e)
    dispatch({ type: failure })
  }
}

export const get = async ({ url, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}
