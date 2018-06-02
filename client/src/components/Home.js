import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import InfoZone from './Info/InfoZone'
import { SettingWrap } from './Info/Styled'
import { MainWrap } from './Styled'
import { getRsshubID, getRsshubScript, getRsshubUpdate } from '../actions'
import Setting from './Setting/Setting'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.getRsshubID = props.getRsshubID
    this.getRsshubUpdate = props.getRsshubUpdate
  }

  componentDidMount() {
    this.getRsshubID()
    this.getRsshubUpdate()
  }

  render() {
    return this.props.user.token ? (
      <MainWrap>
        <SettingWrap>
          <Setting />
        </SettingWrap>
        <InfoZone />
        <div style={{ clear: 'both' }}/>
      </MainWrap>
    ) : (
      <Redirect to="/login"/>
    )
  }
}

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }), {
  getRsshubID,
  getRsshubScript,
  getRsshubUpdate,
})(Home)

