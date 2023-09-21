import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Logo />
          <Menu />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #36affa;
  display: flex;
  justify-content: space-between;
`
