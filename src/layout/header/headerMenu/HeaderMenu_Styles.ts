import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import Link from "react-scroll/modules/components/Link"

// Menu

const Menu = styled.nav`

`
const ListItem = styled.li`
  
`
const NavLink = styled(Link)`
  display: block;
  transition: transform 0.2s ease-in-out;
  ${font({family: "'Raleway', sans-serif", color: theme.colors.firstTitle, Fmax: 18, Fmin: 16, weight: 500})}

  &:hover, &.active {
    background-image: linear-gradient(130deg, #0c41ac 10%, #2d9b1a 60%, #367ec1 80%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transform: scale3d(1.2, 1.2, 1.2);
    transition: transform 0.2s ease-in-out;
  }

  @media ${theme.media.mobile} {
    ${font({family: "'Raleway', sans-serif", color: theme.colors.accent, Fmax: 80, Fmin: 30, weight: 500})}
  }
`
// DesktopMenu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }

  @media ${theme.media.tablet} {
    ul {
      gap: 28px;
    }
  }
`
// MobileMenu
const MobileMenu = styled.nav`
  
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
  background-color: rgba(104,108,107,0.40);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.9s ease-in-out, transform 0.9s ease-in-out;


  ${props => props.isOpen && css<{isOpen: boolean}>`
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.9s ease-in-out, transform 0.9s ease-in-out;
  `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`

export const S = {
  Menu,
  ListItem,
  NavLink,
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup
}