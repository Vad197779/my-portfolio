import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import Project1 from '../../../assets/images/proj1.jpeg'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper>
        <Project title={"Project Name"}
                  src={Project1}
                  text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} />
        <Project title={"Project Name"}
                  />
        <Project />
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #c6bbbb;
`