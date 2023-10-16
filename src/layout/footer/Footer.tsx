import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'
import Photo from '../../assets/images/Vector.png'
import { theme } from '../../styles/Theme'
import { LiaViber } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { RiTelegramLine } from "react-icons/ri";
import { font } from '../../styles/Common'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <LiaInstagram size={50} color='white'/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <RiTelegramLine size={50} color='white'/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <LiaViber size={50} color='white'/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <BiLogoWhatsapp size={50} color='white'/>
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>Vadim Kovtunenko 2023 </Copyright>
          <BgImage src={Photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
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