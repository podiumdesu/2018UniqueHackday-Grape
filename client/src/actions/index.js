import { actionTypes as types, urls } from '../constants'
import { post, get } from '../helpers'

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

export const getRsshubScript = ({ uploadScript, info }) => dispatch => {
  dispatch({ type: types.GET_RSSHUB_SCRIPT_REQUEST })
  post({
    url: urls.GET_RSSHUB_SCRIPT,
    body: { uploadScript, info },
    success: types.GET_RSSHUB_SCRIPT_SUCCESS,
    failure: types.GET_RSSHUB_SCRIPT_FAILURE,
    dispatch,
  })
}

export const getRsshubUpdate = () => dispatch => {
  dispatch({ type: types.GET_RSSHUB_UPDATE_REQUEST })
  post({
    url: urls.GET_RSSHUB_UPDATE,
    success: types.GET_RSSHUB_UPDATE_SUCCESS,
    failure: types.GET_RSSHUB_UPDATE_FAILURE,
    dispatch,
  })
}

export const updateVisibility = (visibility) => dispatch => {
  dispatch({ type: types.UPDATE_VISIBILITY, data: visibility })
}
