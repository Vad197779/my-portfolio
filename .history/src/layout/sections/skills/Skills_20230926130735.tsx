import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './Skill'
import { Container } from '../../../components/Container'

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill iconId={"html"}/>
          <Skill iconId={"css"}/>
          <Skill iconId={"typescript"}/>
          <Skill iconId={"react"}/>
          <Skill iconId={"figma"}/>
          <Skill iconId={"git"}/>
          <Skill iconId={"github"}/>
          <Skill iconId={"styledcomponents"}/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

export const StyledSkills = styled.section`
  background-color: #b8d8cf;
  min-height: 100vh;
`
const