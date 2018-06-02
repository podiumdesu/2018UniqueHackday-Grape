import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from './Styled'

const Form = ({ onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <TextField
      type="email"
      name="email"
      placeholder="Email address"
      title="Enter your email address"
      required
    />
    <TextField
      type="password"
      name="password"
      placeholder="Password"
      title="Type a strong password: aBC_123^"
      pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
      required
    />
    <Submit clickable type="submit" value={value} />
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
