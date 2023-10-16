import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { MobileMenu } from './mobileMenu/MobileMenu'
import {S} from './Header_Styles'

const items = ["About", "Projects", "Contacts"]

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <Menu menuItems={items}/>
          <MobileMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}

