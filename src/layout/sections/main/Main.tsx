import React from 'react'
import photo from '../../../assets/images/my-photo4.png'
import { Container } from '../../../components/Container'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import {S} from './Main_Styles'

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
          <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
            <S.Box>
              <S.MainTitle>Software Developer</S.MainTitle>
              <S.Name>Hello, my name is <span>Vadim Kovtunenko</span></S.Name>
              <S.MainText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</S.MainText>
              <S.Link href=""><Button bgc={"#1ABCFE"} border={"2px solid #1abcfe"}>Projects</Button></S.Link>
              <S.Link href=""><Button >LinkedIn</Button></S.Link>
            </S.Box>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </FlexWrapper>
      </Container>
    </S.Main>
  )
}
