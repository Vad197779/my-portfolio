import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`
export const S = {
  DesktopMenu
}