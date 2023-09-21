import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

const items = ["", ]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
