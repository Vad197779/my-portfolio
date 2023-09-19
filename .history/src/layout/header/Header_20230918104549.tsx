import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #36affa;
`
