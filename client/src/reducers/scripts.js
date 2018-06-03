import { actionTypes as types } from '../constants'

const scripts = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_SCRIPT_SUCCESS:
      return action.data.reduce((a, c) => a.concat(c), [])
    case types.GET_ALL_SCRIPT_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default scripts
