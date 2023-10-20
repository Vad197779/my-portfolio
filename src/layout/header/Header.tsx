import React, { useEffect, useState } from 'react'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import {S} from './Header_Styles'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'
import { Fade } from "react-awesome-reveal";




export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('transparent');
  const breakpoint = 580;
  

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newBackgroundColor = scrollPosition > 100 ? 'rgba(104,108,107,0.40)' : 'transparent';
      setHeaderBackgroundColor(newBackgroundColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Header style={{ backgroundColor: headerBackgroundColor }}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Fade cascade={true} damping={0.2} direction='left' delay={0.1}>
            <Logo />
          </Fade>

          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}

        </FlexWrapper>
      </Container>
    </S.Header>
  )
}

