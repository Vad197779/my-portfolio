import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import Project1 from '../../../assets/images/proj1.jpeg'
import Project2 from '../../../assets/images/proj2.jpeg'
import Project3 from '../../../assets/images/proj3.jpeg'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper direction={"column"}>
        <Project title={"Project Name"}
                  src={Project1}
                  text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} />
        <Project title={"Project Name"}
                  src={Project2}
                  text={"What was your role, your deliverables, if the project was personal, freelancing."}/>
        <Project title={"Project Name"}
                  src={Project3}
                  text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}/>
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #c6bbbb;
  df
`