import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './Skill'
import { Container } from '../../../components/Container'

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
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-evenly"} gap={"74px"}>
          {skillData.map((s) => {
            return <Skill iconId={s.iconId}/>
          })}
          
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
`
