import styled from 'emotion/react'
import { Link } from 'react-router-dom'


export const FormTitle = styled.h1`
  font-family: sans-serif;
  font-weight: 100;
`

export const TextField = styled.input`
  display: block;
  height: 36px;
  width: 60%;
  margin: 18px auto;
  padding: 0 8px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  appearance: none;
  &:focus {
    border-color: rgb(0, 128, 255);
  }
`

export const LoginWrap = styled.div`
  border-radius: 10px;
  @media (min-width: 880px) {
    width: 400px;
  }
  display: block;
  width: 300px;
  height: 400px;
  margin: 80px auto;
  padding-top: 20px;
  overflow: hidden;
  background-color: #A895C6;
`

export const WhiteContent = styled.div`
  padding-top: 30px;
  border-radius: 10px;
  background-color: white;
  height: 100%;
  position: relative;
`

export const Submit = styled.input`
  color: white;
  font-size: 14px;
  border-radius: 2px;
  background-color: #705A92;
  cursor: pointer;
  height: 36px;
  width: 40%;
  margin-top: 30px;
`

export const FooterLink = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 45px;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 100;
  text-decoration: none;
  color: rgb(10, 10, 10);
  &:hover {
    color: rgb(0, 0, 0);
  }
`
