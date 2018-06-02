import React from 'react'
import { InfoZoneWrap } from './Styled'
import Empty from './Empty'
import Info from './Info'

const InfoZone = ({ items }) => {
  console.log(items)
  return (
    <InfoZoneWrap>
      {items.length > 0 ? items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Info info={item} key={i} />
      )) : <Empty />}
    </InfoZoneWrap>
  )
}

export default InfoZone
