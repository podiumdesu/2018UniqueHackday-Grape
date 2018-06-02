import { actionTypes as types } from '../constants'

const info = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RSSHUB_UPDATE_SUCCESS:
      return action.data
    case types.GET_RSSHUB_UPDATE_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default info
