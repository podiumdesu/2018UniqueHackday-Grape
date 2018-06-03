import { actionTypes as types, urls } from '../constants'
import { post, get, deleteR } from '../helpers'

export const signup = ({ name, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  post({
    url: urls.SIGNUP,
    body: { name, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  })
}

export const login = ({ name, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN,
    body: { name, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}

export const loginWithToken = () => (dispatch, getState) => {
  const token = getState().user.token

  if (typeof token === 'undefined') return

  dispatch({ type: types.LOGIN_SUCCESS, data: { token } })
  // post({
  //   url: urls.LOGIN_WITH_TOKEN,
  //   body: { token },
  //   success: types.LOGIN_SUCCESS,
  //   failure: types.LOGIN_FAILURE,
  //   dispatch,
  // })
}

export const getRsshubID = () => dispatch => {
  dispatch({ type: types.GET_RSSHUB_ID_REQUEST })
  get({
    url: urls.GET_RSSHUB_ID,
    success: types.GET_RSSHUB_ID_SUCCESS,
    failure: types.GET_RSSHUB_ID_FAILURE,
    dispatch,
  })
}

export const addNewScript = ({ type, uid, other }) => dispatch => {
  dispatch({ type: types.ADD_NEW_SCRIPT_REQEUST })
  post({
    url: urls.ADD_NEW_SCRIPT,
    body: { type, uid, other },
    success: types.ADD_NEW_SCRIPT_SUCCESS,
    failure: types.ADD_NEW_SCRIPT_FAILURE,
    dispatch,
  })
}

export const deleteSingleScript = ({ uuid }) => dispatch => {
  dispatch({ type: types.DELETE_SINGLE_SCRIPT_REQUEST })
  deleteR({
    url: urls.DELETE_SINGLE_SCRIPT,
    body: { uuid },
    success: types.DELETE_SINGLE_SCRIPT_SUCCESS,
    failure: types.DELETE_SINGLE_SCRIPT_FAILURE,
    dispatch,
  })
}

export const getAllScript = () => dispatch => {
  dispatch({ type: types.GET_ALL_SCRIPT_REQUEST })
  get({
    url: urls.GET_ALL_SCRIPT,
    success: types.GET_ALL_SCRIPT_SUCCESS,
    failure: types.GET_ALL_SCRIPT_FAILURE,
    dispatch,
  })
}

export const updateAllScript = () => dispatch => {
  dispatch({ type: types.UPDATE_ALL_SCRIPT_REQUEST })
  get({
    url: urls.UPDATE_ALL_SCRIPT,
    success: types.UPDATE_ALL_SCRIPT_SUCCESS,
    failure: types.UPDATE_ALL_SCRIPT_FAILURE,
    dispatch,
  })
}

export const updateVisibility = (visibility) => dispatch => {
  dispatch({ type: types.UPDATE_VISIBILITY, data: visibility })
}
