import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { MobileMenu } from './mobileMenu/MobileMenu'
import {S} from './Header_Styles'
import { DesktopMenu } from './desktopMenu/DesktopMenu'

const items = ["About", "Projects", "Contacts"]

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <DesktopMenu menuItems={items}/>
          <MobileMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}

