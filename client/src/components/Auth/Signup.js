import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signup } from '../../actions'

import { FooterLink, LoginWrap, WhiteContent } from './Styled'
import Form from './Form'

const Signup = ({ user, signup }) => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    const { name: { value: name }, password: { value: password } } = e.target
    console.log({name, password})
    signup({ name, password })
  }

  return (
    <LoginWrap>
      <WhiteContent>
        <Form value="SIGN UP" onSubmit={handleSubmit} />
        <FooterLink to="/login">Already have an account ?</FooterLink>
        {user.token && <Redirect to="/" />}
      </WhiteContent>
    </LoginWrap>
  )
}

Signup.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(Signup)
