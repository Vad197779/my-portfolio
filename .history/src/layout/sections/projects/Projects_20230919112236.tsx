import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper>
        <Project title={""}/>
        <Project />
        <Project />
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #c6bbbb;
`