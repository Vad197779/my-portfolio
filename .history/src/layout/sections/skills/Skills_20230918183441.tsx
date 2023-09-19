import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './Skill'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper>
        <Skill iconId={"html"}/>
        <Skill iconId={"css"}/>
        <Skill iconId={"typescript"}/>
        <Skill iconId={"react"}/>
        <Skill iconId={"figma"}/>
        <Skill iconId={"git"}/>
        <Skill iconId={"github"}/>
        <Skill iconId={"html"}/>
      </FlexWrapper>
    </StyledSkills>
  )
}

export const StyledSkills = styled.section`
  background-color: #45ecbd;
  min-height: 100vh;
`