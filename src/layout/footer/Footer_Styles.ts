import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"
import Photo from '../../assets/images/Vector.png'

const Footer = styled.footer`
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`
const SocialItem = styled.li`
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  
  &:first-child {
    background: linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  }
  &:nth-child(2) {
    background-color: #1abcfe;
  }
  &:nth-child(3) {
    background-color: #62569d;
  }
  &:nth-child(4) {
    background-color: #43e460;
  }

  &:hover {
    color: ${theme.colors.accent};
    transform: scale3d(1.2, 1.2, 1.2);
    transition: transform 0.2s ease-in-out;
  }
`
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Copyright = styled.small`
  ${font({color: theme.colors.font, Fmax: 16, Fmin: 14, weight: 400})}
`
const BgImage = styled.img`
  background-image: url(${Photo});
  background-size: contain;
  width: 100vw;
`
export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
  BgImage
}