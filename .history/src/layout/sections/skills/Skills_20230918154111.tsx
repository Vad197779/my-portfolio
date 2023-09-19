import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { StyledSkills } from '../../../components/SectionTitle'

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

export const StyledSkills = styled.section`
  
`