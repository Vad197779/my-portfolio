import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import photoBg from '../../../assets/images/linear-bg.svg'

const Main = styled.section`
  overflow: hidden;
  

  @media ${theme.media.tablet} {
    
  }
`
const Box = styled.div`
  max-width: 508px;
  position: relative;
  z-index: 3;
  
`

const MainTitle = styled.h1`
  ${font({color: theme.colors.accent, Fmax: 20, Fmin: 16, weight: 700})}
  text-transform: uppercase;
  margin-bottom: 12px;
`
const Name = styled.h2`
  span {
    white-space: nowrap;
    background-image: linear-gradient(130deg, #0c41ac 10%, #2d9b1a 60%, #367ec1 80%);
    color: transparent;
    -webkit-background-clip: text;
  }
  ${font({family: "'Roboto', sans-serif", color: "#2d9b1a", Fmax: 64, Fmin: 36, weight: 700})}
`
const MainText = styled.p`
  ${font({color: theme.colors.font, Fmax: 24, Fmin: 16, weight: 400})}
  margin: 32px 0;

  @media ${theme.media.mobile} {
    margin: 24px 0;
  }
`

const Link = styled.a`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  &::before {
    content: "";
    display: inline-block;
    width: 777px;
    height: 877px;
    position: absolute;
    top: -250px;
    right: -220px;
    z-index: 0;
    background-image: url(${photoBg});
    background-size: contain;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 630px;
  object-fit: cover;
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;
`
export const S = {
  Main,
  Box,
  MainTitle,
  Name,
  MainText,
  Link,
  PhotoWrapper,
  Photo
}