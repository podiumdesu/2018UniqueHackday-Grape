import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../actions'

import { FooterLink, LoginWrap, WhiteContent } from './Styled'
import Form from './Form'

const Login = ({ user, login }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  return (
    <LoginWrap>
      <WhiteContent>
        <Form value="SIGN UP" onSubmit={handleSubmit} />
        <FooterLink to="/signup">{'You don\'t have an account ?'}</FooterLink>
        {user.token && <Redirect to="/" />}
      </WhiteContent>
    </LoginWrap>
  )
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
