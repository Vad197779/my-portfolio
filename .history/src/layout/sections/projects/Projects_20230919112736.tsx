import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
im

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper>
        <Project title={"Project Name"} text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} />
        <Project />
        <Project />
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #c6bbbb;
`