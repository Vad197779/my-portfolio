import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import Project1 from '../../../assets/images/proj1.png'
import Project2 from '../../../assets/images/proj2.png'
import Project3 from '../../../assets/images/proj3.jpeg'
import { Container } from '../../../components/Container'

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
          <Project title={"My First Portfolio"}
                    link={"https://vad197779.github.io/portfolio-start-project-main/"}
                    src={Project1}
                    text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}/>
          <Project title={"Burger House"}
                    link={"https://vad197779.github.io/burgers/"}
                    src={Project2}
                    text={"What was your role, your deliverables, if the project was personal, freelancing."}/>
          <Project title={"Project Name"}
                    link={""}
                    src={Project3}
                    text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  
`