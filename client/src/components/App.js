import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import { Body } from './Styled'

// eslint-disable-next-line no-unused-vars
import global from './App.css'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <Body>
    <Header logIn={user.token && true} />
    <Switch>
      {user.token && <Route path="/" component={Home} />}
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  </Body>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
