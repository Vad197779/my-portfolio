import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './Skill'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-"}>
        <Skill iconId={"html"}/>
        <Skill iconId={"css"}/>
        <Skill iconId={"typescript"}/>
        <Skill iconId={"react"}/>
        <Skill iconId={"figma"}/>
        <Skill iconId={"git"}/>
        <Skill iconId={"github"}/>
        <Skill iconId={"styledcomponents"}/>
      </FlexWrapper>
    </StyledSkills>
  )
}

export const StyledSkills = styled.section`
  background-color: #b8d8cf;
  min-height: 100vh;
`