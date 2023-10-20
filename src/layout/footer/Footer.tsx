import React from 'react'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'
import { LiaViber } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { RiTelegramLine } from "react-icons/ri";
import {S} from './Footer_Styles'
import Photo from '../../assets/images/Vector.png'
import { Fade } from "react-awesome-reveal";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <Fade cascade={true} damping={0.2} direction='left'>
            <S.SocialList>
              <S.SocialItem>
                <S.SocialLink href='https://instagram.com/vad_77_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                  <LiaInstagram size={50} color='white'/>
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink href='https://t.me/+37368479335' target='_blank'>
                  <RiTelegramLine size={50} color='white'/>
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink href='viber://chat?number=%2B37368479335' target='_blank'>
                  <LiaViber size={50} color='white'/>
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink href='https://api.whatsapp.com/send?phone=37368479335' target='_blank'>
                  <BiLogoWhatsapp size={50} color='white'/>
                </S.SocialLink>
              </S.SocialItem>
            </S.SocialList>
          </Fade>
          <S.Copyright>Vadim Kovtunenko 2023 </S.Copyright>
          <S.BgImage src={Photo} alt="Background image" />
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}
