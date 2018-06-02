import React from 'react'
import { StyledA, StyledContent, StyledH2, StyledImage } from './Styled'

const Content = ({ author, title, content, source, images }) => {
  return (
    <StyledContent>
      <StyledH2>{author} - {title}</StyledH2>
      <p>{
        images.length
          // eslint-disable-next-line react/no-array-index-key
          ? images.map((image, i) => (<StyledImage src={image} key={i} alt="image" />))
          : <span>{`${content.substring(0, 50)}...`}</span>
      }<StyledA target="_blank" href={source}>Read more</StyledA></p>
    </StyledContent>
  )
}

export default Content
