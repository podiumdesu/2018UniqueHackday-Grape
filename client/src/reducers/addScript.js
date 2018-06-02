import { actionTypes as types } from '../constants'

const addScript = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RSSHUB_SCRIPT_SUCCESS:
      return action.data
    case types.GET_RSSHUB_SCRIPT_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default addScript
