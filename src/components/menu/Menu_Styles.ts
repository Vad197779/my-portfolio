import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`
const ListItem = styled.li`
  
`
const Link = styled.a`
  display: block;
  transition: transform 0.2s ease-in-out;
  ${font({family: "'Raleway', sans-serif", color: theme.colors.firstTitle, Fmax: 18, Fmin: 16, weight: 500})}

  &:hover {
    background-image: linear-gradient(130deg, #0c41ac 10%, #2d9b1a 60%, #367ec1 80%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transform: scale3d(1.2, 1.2, 1.2);
    transition: transform 0.2s ease-in-out;
  }
`
export const S = {
  Menu,
  ListItem,
  Link
}