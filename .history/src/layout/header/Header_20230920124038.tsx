import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} a>
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #36affa;
  display: flex;
  justify-content: space-between;
`
