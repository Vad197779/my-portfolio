import React from 'react'
import styled from 'styled-components'
import photo from '../../../assets/images/my-photo3.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <Box>
            <MainTitle>Software Developer</MainTitle>
            <Name>Hello,  my name is Vadim Kovtunenko</Name>
            <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
            <button>Projects</button>
            <button>LinkedIn</button>
          </Box>
          <PhotoWrapper>
            <Icon width={"720"} height={"629"} viewBox={"0 0 720 629"} iconId={"yellow"} />
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
  /* background-color: #0acf83; */
`
const Box = styled.div`
  max-width: 508px;
`

const MainTitle = styled.h1`
  
`
const Name = styled.h2`
  
`
const PhotoWrapper = styled.div`
  position: absolute;
  
  z-index: 0;
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