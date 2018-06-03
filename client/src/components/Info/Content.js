import React from 'react'
import { StyledA, StyledContent, StyledH2, StyledImage } from './Styled'

const Content = ({ author, title, content, source, images }) => {
  console.log(content)
  return (
    <StyledContent>
      <StyledH2>{author ? `${author} ` : ''}{title}</StyledH2>
      <p>{
        images.length
          // eslint-disable-next-line react/no-array-index-key
          ? images.map((image, i) => (<StyledImage src={image} key={i} alt="image" />))
          : <span>{`${content.length > 30 ? `${content.substring(0, 29)}...` : content}`}</span>
      }<StyledA target="_blank" href={source}>  Read more</StyledA></p>
    </StyledContent>
  )
}

export default Content
