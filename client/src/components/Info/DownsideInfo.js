import React from 'react'
import { ColoredTitle, DownSide, UpdateTime } from './Styled'
import typeColor from './typeColor'
import moment from 'moment'

const DownsideInfo = ({ type, lastUpdate }) => {
  console.log(lastUpdate)
  return (
    <DownSide>
      <ColoredTitle style={{ backgroundColor: typeColor(type) }}>{type}</ColoredTitle>
      <UpdateTime>Update Since: {moment(Date(lastUpdate)).fromNow()}</UpdateTime>
    </DownSide>
  )
}

export default DownsideInfo
