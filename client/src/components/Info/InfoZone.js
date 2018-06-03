import React from 'react'
import { connect } from 'react-redux'
import { InfoZoneWrap } from './Styled'
import Empty from './Empty'
import Info from './Info'
import moment from 'moment'

const InfoZone = ({ info }) => {
  return (
    <InfoZoneWrap>
      {info.length > 0
        ? info.sort((a, b) => {
          return (moment(a.lastUpdate).unix() < moment(b.lastUpdate).unix())
        }).map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Info info={item} key={i}/>
        )) : <Empty/>}
    </InfoZoneWrap>
  )
}

export default connect(state => ({ info: state.info }))(InfoZone)
