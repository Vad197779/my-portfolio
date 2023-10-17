import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Menu } from '../../../components/menu/Menu';

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
      <Menu menuItems={props.menuItems}/>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
}

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -120px;
  right: -110px;
  width: 200px;
  height: 200px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.firstTitle};

    position: absolute;
    left: 40px;
    bottom: 52px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.firstTitle};

      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.firstTitle};

      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
` 
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(104, 108, 107, 0.58);
  z-index: 999;
  display: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`


