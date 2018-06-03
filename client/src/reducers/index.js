import { combineReducers } from 'redux'

import user from './user'
import id from './id'
import info from './info'
import visible from './visible'
import scripts from './scripts'

const rootReducer = combineReducers({
  user,
  id,
  info,
  visible,
  scripts,
})

export default rootReducer
