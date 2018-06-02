import { actionTypes as types } from '../constants'

const info = (state = {}, action) => {
  switch (action.type) {
    case types.RUN_SCRIPT_REQUEST:
      return action.data
    case types.RUN_SCRIPT_SUCCESS:
      return action.data
    case types.RUN_SCRIPT_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default info
