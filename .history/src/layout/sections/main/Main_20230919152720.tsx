import React from 'react'
import styled from 'styled-components'
import photo from '../../../assets/images/me.png'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <div>
          <MainTitle>Software Developer</MainTitle>
          <Name>Hello,  my name is Vadim Kovtunenko</Name>
          <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <button>Projects</button>
          <button>LinkedIn</button>
        </div>
        <div>
          <svg/>
          <Photo src={photo} alt="" />
        </div>
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #45dece;
`

const MainTitle = styled.h1`
  
`
const Name = styled.h2`
  
`

const Photo = styled.img`
  width: 720px;
  height: 629px;
  object-fit: contain;
`