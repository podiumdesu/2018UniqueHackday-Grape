import { actionTypes as types } from '../constants'

const visible = (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_SCRIPT_SUCCESS:
      return action.data.map(v => v.uuid)
    case types.UPDATE_VISIBILITY:
      return state.includes(action.data)
        ? [...state.slice(0, state.indexOf(action.data)), ...state.slice(state.indexOf(action.data)+1, state.length)]
        : [...state, action.data]
    default:
      return state
  }
}

export default visible
