import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import InfoZone from './Info/InfoZone'
import { SettingWrap } from './Info/Styled'
import { MainWrap } from './Styled'

const Home = ({ user, info }) =>
  user.token ? (
    <MainWrap>
      <SettingWrap>
        Settings Here~
      </SettingWrap>
      <InfoZone
        items={info ? info.items : [{
          type: 'String',
          author: 'String',
          lastUpdate: Date.now().toString(),
          title: 'String',
          isNew: true,
          content: 'test content',
          images: [],
          source: 'StringS',
        }]}
      />
      <div style={{ clear: 'both' }}/>
    </MainWrap>
  ) : (
    <Redirect to="/login"/>
  )

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user, info: state.info }))(Home)
