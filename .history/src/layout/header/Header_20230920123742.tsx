import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

export const Header = () => {
  return (
    <StyledHeader>
      <Con>
        <Logo />
        <Menu />
      </Con>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #36affa;
  display: flex;
  justify-content: space-between;
`
