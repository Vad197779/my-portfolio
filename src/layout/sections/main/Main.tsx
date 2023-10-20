import React from 'react'
import photo from '../../../assets/images/my-photo4.png'
import { Container } from '../../../components/Container'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";

export const Main: React.FC = () => {
  return (
    <S.Main id={"About"}>
      <Container>
          <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
            <Fade cascade={true} damping={0.2} direction='left' delay={0.1}>
              <S.Box>
                <S.MainTitle>
                  <p>Software Developer</p>
                  <Typewriter
                    options={{
                        strings: ['Software Developer'],
                        autoStart: true,
                        loop: true,
                        delay: 100
                      }}
                    />
                </S.MainTitle>
                <S.Name>Hello, my name is <span>Vadim Kovtunenko</span></S.Name>
                <S.MainText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</S.MainText>
                <S.ProjectLink
                  to={"Projects"}
                  smooth={true}
                  spy={true}
                  offset={-0.7}
                ><Button bgc={"#1ABCFE"} border={"2px solid #1abcfe"}>Projects</Button></S.ProjectLink>
                <S.LinkedinLink href='https://www.linkedin.com/in/vadim-kovtunenko-2a8b5b277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYwBJooenSf6DlPhJGx5BpA%3D%3D' target='_blank' ><Button >LinkedIn</Button></S.LinkedinLink>
              </S.Box>
            </Fade>
            <Fade cascade={true} damping={0.2} direction='right' delay={0.1}>
              <S.PhotoWrapper>
                <S.Photo src={photo} alt="" />
              </S.PhotoWrapper>
            </Fade>
          </FlexWrapper>
      </Container>
    </S.Main>
  )
}
