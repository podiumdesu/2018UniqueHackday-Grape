import { actionTypes as types } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return action.data
    case types.LOGIN_SUCCESS:
      return action.data
    case types.LOGIN_FAILURE:
      console.error(action.e)
      return {}
    default:
      return state
  }
}

export default user
