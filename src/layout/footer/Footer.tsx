import React from 'react'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'
import { LiaViber } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { RiTelegramLine } from "react-icons/ri";
import {S} from './Footer_Styles'
import Photo from '../../assets/images/Vector.png'

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.SocialList>
            <S.SocialItem>
              <S.SocialLink>
                <LiaInstagram size={50} color='white'/>
              </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
              <S.SocialLink>
                <RiTelegramLine size={50} color='white'/>
              </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
              <S.SocialLink>
                <LiaViber size={50} color='white'/>
              </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
              <S.SocialLink>
                <BiLogoWhatsapp size={50} color='white'/>
              </S.SocialLink>
            </S.SocialItem>
          </S.SocialList>
          <S.Copyright>Vadim Kovtunenko 2023 </S.Copyright>
          <S.BgImage src={Photo} alt="" />
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}
