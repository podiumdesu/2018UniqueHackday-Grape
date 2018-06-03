import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import InfoZone from './Info/InfoZone'
import { SettingWrap } from './Info/Styled'
import { MainWrap } from './Styled'
import { getRsshubID, updateAllScript, getAllScript } from '../actions'
import Setting from './Setting/Setting'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.getRsshubID = props.getRsshubID
    this.updateAllScript = props.updateAllScript
    this.getAllScript = props.getAllScript
    this.update = this.update.bind(this)
  }

  update() {
    this.getRsshubID()
    this.updateAllScript()
    this.getAllScript()
  }

  componentDidMount() {
    this.update()
  }

  render() {
    return this.props.user.token ? (
      <MainWrap>
        <SettingWrap>
          <Setting update={this.update}/>
        </SettingWrap>
        <InfoZone/>
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
  updateAllScript,
  getAllScript,
})(Home)

