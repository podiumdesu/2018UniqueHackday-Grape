import { combineReducers } from 'redux'

import user from './user'
import id from './id'
import info from './info'
import addScript from './addScript'

const rootReducer = combineReducers({
  user,
  id,
  info,
  addScript,
})

export default rootReducer
