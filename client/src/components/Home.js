import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import InfoZone from './Info/InfoZone'
import { SettingWrap } from './Info/Styled'
import { MainWrap } from './Styled'
import { getRsshubID, getRsshubScript, getRsshubUpdate } from '../actions'

const Home = ({ user, info, getRsshubID, getRsshubUpdate }) => {
  getRsshubID()
  getRsshubUpdate()
  return user.token ? (
    <MainWrap>
      <SettingWrap>
        Settings Here~
      </SettingWrap>
      <InfoZone
        items={
          info && info.length
            ? info
            : []
        }
      />
      <div style={{ clear: 'both' }}/>
    </MainWrap>
  ) : (
    <Redirect to="/login"/>
  )
}

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user, info: state.info }), {
  getRsshubID,
  getRsshubScript,
  getRsshubUpdate,
})(Home)

