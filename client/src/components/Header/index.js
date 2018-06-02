import React from 'react'

import { TitleImage } from '../Styled'

import banner from './banner.png'
import bannerW from './banner-white.png'

const Header = ({ logIn }) => (
  <div style={{ backgroundColor: `${logIn ? '#705A92' : ''}` }}>
    <TitleImage src={logIn ? bannerW : banner} alt={banner} />
  </div>
)

export default Header
