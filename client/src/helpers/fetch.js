// fake fetch
const fetch = (url, { method }) => {
  const result = { token: '123', email: 'treat@hook.com' }
  if (method === 'GET') {
    return new Promise((resolve => resolve({ json() { return new Promise(back => back(result)) } })))
  }
  return new Promise((resolve => resolve({ json() { return new Promise(back => back(result)) } })))
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
    dispatch({ type: failure, e })
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
    dispatch({ type: failure, e })
  }
}
