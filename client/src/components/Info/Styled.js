import styled from 'emotion/react'

export const InfoZoneWrap = styled.div`
  width: 100%;
  @media (min-width: 880px) {
    width: 70%;
  }
  float: right;
`

export const SettingWrap = styled.div`
  width: 100%;
  @media (min-width: 880px) {
    width: 30%;
  }
  margin: 0;
  float: right;
`

export const InfoStyled = styled.div`
  background-color: white;
  color: black;
  width: 80%;
  margin: 30px auto;
  position: relative;
  border-radius: 6px;
  text-align: left;
`

export const EmptyWrap = styled.div`
  font-size: 64px;
  font-color: white;
`

export const ColoredBackground = styled.div`
  opacity: 0.5;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: -6px;
  left: -6px;
`

export const ContentWrap = styled.div`
  padding: 40px 40px 60px 50px;
`

export const StyledContent = styled.div`
  padding: 10px;
  color: #705A92;
`

export const StyledH2 = styled.h2`
  font-size: 20px;
  margin: 8px 0;
`
export const StyledA = styled.a`
  font-weight: bold;
  opacity: 0.9;
  color: #432B69;
`

export const DownSide = styled.div`
  padding: 0 15px;
`

export const UpdateTime = styled.div`
  position: absolute;
  right: 28px;
  bottom: 28px;
  color: #705A92;
  opacity: 0.7;
  font-weight: thin;
  font-size: 12px;
`
export const StyledSpan = styled.span`
  opacity: 0.9;
`

export const ColoredTitle = styled.div`
  position: absolute;
  padding: 4px 8px;
  left: -4px;
  bottom: 8px;
  color: white;
  border-radius: 4px;
`
export const StyledImage = styled.img`
  margin: 10px;
`
