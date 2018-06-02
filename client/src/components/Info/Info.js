import React from 'react'
import typeColor from './typeColor'
import { ColoredBackground, ContentWrap, InfoStyled } from './Styled'
import Content from './Content'
import DownsideInfo from './DownsideInfo'


const Info = ({ info }) => {
// eslint-disable-next-line no-unused-vars
  const { type, author, lastUpdate, title, isNew, content, images, source } = info
  return (
    // <InfoStyled>
    <InfoStyled>
      <ColoredBackground style={{ backgroundColor: typeColor(type) }}>&nbsp;</ColoredBackground>
      <ContentWrap>
        <Content author={author} title={title} content={content} images={images} source={source} />
        <DownsideInfo type={type} lastUpdate={lastUpdate} />
      </ContentWrap>
    </InfoStyled>
  )
}

export default Info
