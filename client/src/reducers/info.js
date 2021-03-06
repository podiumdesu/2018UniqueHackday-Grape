import { actionTypes as types } from '../constants'

const info = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_ALL_SCRIPT_SUCCESS:
      return action.data.reduce((a, c) => a.concat(c), [])
    case types.UPDATE_ALL_SCRIPT_FAILURE:
      console.error(action.e)
      return {}
    case types.ADD_NEW_SCRIPT_SUCCESS:
      return [...state, ...action.data]
    default:
      return state
  }
}

export default info
