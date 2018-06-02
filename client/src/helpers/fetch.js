import axios from 'axios'

export const post = async ({ url, body, success, failure, dispatch }) => {
  try {
    const res = await axios({
      url,
      data: JSON.stringify(body),
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: success, data: res.data })
  } catch (e) {
    dispatch({ type: failure, e })
  }
}

export const get = async ({ url, success, failure, dispatch }) => {
  try {
    const res = await axios.get(url)
    dispatch({ type: success, data: res.data })
  } catch (e) {
    dispatch({ type: failure, e })
  }
}
