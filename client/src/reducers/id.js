import { actionTypes as types } from '../constants'

const id = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RSSHUB_ID_SUCCESS:
      return action.data
    case types.GET_RSSHUB_ID_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default id
