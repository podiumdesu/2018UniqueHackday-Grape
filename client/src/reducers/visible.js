import { actionTypes as types } from '../constants'

const visible = (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_SCRIPT_SUCCESS:
      return action.data
    case types.UPDATE_VISIBILITY:
      return action.data
    default:
      return state
  }
}

export default visible
