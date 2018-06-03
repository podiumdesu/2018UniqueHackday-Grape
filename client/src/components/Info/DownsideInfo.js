import React from 'react'
import { ColoredTitle, DownSide, UpdateTime } from './Styled'
import typeColor from './typeColor'
import moment from 'moment'

const DownsideInfo = ({ type, lastUpdate }) => {
  return (
    <DownSide>
      <ColoredTitle style={{ backgroundColor: typeColor(type) }}>{type}</ColoredTitle>
      <UpdateTime>Last Update: {moment(lastUpdate).fromNow()}</UpdateTime>
    </DownSide>
  )
}

export default DownsideInfo
