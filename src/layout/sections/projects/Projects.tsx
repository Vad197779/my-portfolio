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
    text: "This is my first project thanks to which I realized that I want to develop in web development."
  },
  {
    title: "GoCorona",
    link: "https://vad197779.github.io/GoCona/",
    src: Project2,
    text: "I made this project after watching the master class. A good experience, thanks to this master class, I realized that it is necessary to constantly learn."
  },
  {
    title: "React project",
    link: "https://vad197779.github.io/portfolio-start-project-main",
    src: Project3,
    text: "In this project, using the React framework, I made my second portfolio. I really enjoyed this experience. And I realized that I wanted to study libraries and frameworks even more and improve my skills."
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
