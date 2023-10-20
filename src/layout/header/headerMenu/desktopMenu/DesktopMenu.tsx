import React from 'react'
import {S} from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu'
import { Fade } from "react-awesome-reveal"

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Fade cascade={true} damping={0.2} direction='right' delay={0.1}>
        <Menu />
      </Fade>
    </S.DesktopMenu>
  );
}
