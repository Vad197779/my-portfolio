import React from 'react'
import styled from 'styled-components'
import photo from '../../../assets/images/my-photo.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
// import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../components/Button'
import photoBg from '../../'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <Box>
            <MainTitle>Software Developer</MainTitle>
            <Name>Hello,  my name is Vadim Kovtunenko</Name>
            <MainText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</MainText>
            <Link href=""><Button border={"2px solid #1abcfe"} mgr={"12px"}>Projects</Button></Link>
            <Link href=""><Button bgc={"transparent"} border={"2px solid #25282B"}>LinkedIn</Button></Link>
          </Box>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  position: relative;
`
const Box = styled.div`
  max-width: 508px;
`

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 12px;
`
const Name = styled.h2`
  color: rgba(10, 207, 131, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 64px;
  font-weight: 700;
`
const MainText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${theme.colors.font};
  margin: 32px 0;
`

const Link = styled.a`
  
`

const PhotoWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 777px;
    height: 877px;
    position: absolute;
    top: -100px;
    right: -100px;
    z-index: 0;
    background-image: url(${photoBg});
    background-size: contain;
  }
`

const Photo = styled.img`
  width: 720px;
  height: 629px;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`