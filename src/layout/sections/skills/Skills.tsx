import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './Skill'
import { Container } from '../../../components/Container'
import { Fade } from "react-awesome-reveal"

const skillData = [
  {
    iconId: "html"
  },
  {
    iconId: "css"
  },
  {
    iconId: "typescript"
  },
  {
    iconId: "react"
  },
  {
    iconId: "figma"
  },
  {
    iconId: "git"
  },
  {
    iconId: "github"
  },
  {
    iconId: "styledcomponents"
  }
]

export const Skills: React.FC = () => {
  return (
    <StyledSkills id={"Skills"}>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-evenly"} gap={"74px"}>
          <Fade cascade={true} damping={0.2} direction='left' delay={0.1}>
            {skillData.map((s) => {
              return <Skill iconId={s.iconId} />
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
`
