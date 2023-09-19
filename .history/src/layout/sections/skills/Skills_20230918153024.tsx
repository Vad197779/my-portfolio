import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper>
        <Icon iconId={"html"}/>
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  
`
const SectionTitle = styled.h2`
  
`