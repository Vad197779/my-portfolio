import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import Project1 from '../../../assets/images/proj1.png'
import Project2 from '../../../assets/images/proj2.png'
import Project3 from '../../../assets/images/proj3.png'
import { Container } from '../../../components/Container'
import {S} from './Project_Styles'
import { Zoom } from "react-awesome-reveal";

const projectData = [
  {
    title: "My First Project",
    link: "https://vad197779.github.io/portfolio/",
    src: Project1,
    text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
  },
  {
    title: "Funny",
    link: "https://vad197779.github.io/GoCona/",
    src: Project2,
    text: "What was your role, your deliverables, if the project was personal, freelancing."
  },
  {
    title: "React project",
    link: "https://vad197779.github.io/portfolio-start-project-main",
    src: Project3,
    text: "You can also add in this description the type of the project, if it was for web, mobile, electron."
  },
]

export const Projects: React.FC = () => {
  return (
    <S.Projects id={"Projects"}>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"} gap={"80px"}>
          <Zoom cascade={true} damping={0.1} delay={0.1}>
            {projectData.map((p, index) => {
              return <Project key={p.title}
                              title={p.title}
                              link={p.link}
                              src={p.src}
                              text={p.text}
                              even={index % 2 === 0}/>
            })}
          </Zoom>
        </FlexWrapper>
      </Container>
    </S.Projects>
  )
}
