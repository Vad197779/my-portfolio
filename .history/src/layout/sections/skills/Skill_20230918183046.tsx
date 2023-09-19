import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
  iconId
}

export const Skill = () => {
  return (
    <StyledSkill>
      <Icon iconId={"html"}/>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  
`