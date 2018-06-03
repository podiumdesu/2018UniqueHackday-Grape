import styled from 'emotion/react'

export const StyledBox = styled.div`
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  margin: 8px;
  padding: 6px;
`

export const StyledButton = styled.button`
  display: inline-block;
  background: transparant;
  color: #705A92;
  border: 1px solid #705A92;
  border-radius: 4px;
  margin: 8px;
  padding: 6px;
  cursor: pointer;
  :hover {
    opacity: .8
  }
`

export const StyledSetting = styled.div`
  width: 80%;
  position: relative;
  left: -10%;
  margin: 16px auto;
  background: white;
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 40px;
  border-radius: 6px;
`

export const StyledInput = styled.input`
  display: block;
  border-radius: 4px;
  margin: 8px auto;
  width: 80%;
  padding: 6px;
`
