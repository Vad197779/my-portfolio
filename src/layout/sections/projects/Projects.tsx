import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import Project1 from '../../../assets/images/proj1.png'
import Project2 from '../../../assets/images/proj2.png'
import Project3 from '../../../assets/images/proj3.jpeg'
import { Container } from '../../../components/Container'
import {S} from './Project_Styles'

const projectData = [
  {
    title: "My First Portfolio",
    link: "https://vad197779.github.io/portfolio-start-project-main/",
    src: Project1,
    text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
  },
  {
    title: "Burger House",
    link: "https://vad197779.github.io/burgers/",
    src: Project2,
    text: "What was your role, your deliverables, if the project was personal, freelancing."
  },
  {
    title: "Project Name",
    link: "",
    src: Project3,
    text: "You can also add in this description the type of the project, if it was for web, mobile, electron."
  }
]

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
          {projectData.map((p) => {
            return <Project title={p.title}
                            link={p.link}
                            src={p.src}
                            text={p.text}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  )
}
