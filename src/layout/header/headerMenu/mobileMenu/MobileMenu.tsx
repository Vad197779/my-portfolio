import React, { useState } from 'react'
import { Menu } from '../menu/Menu';
import {S} from '../HeaderMenu_Styles'
import { Zoom } from "react-awesome-reveal"

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
      <Zoom cascade={true} damping={0.2} delay={0.1}>
        <Menu />
      </Zoom>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
}
