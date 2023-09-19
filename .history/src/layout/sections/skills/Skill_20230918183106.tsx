import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
  iconId: string
}

export const Skill = () => {
  return (
    <StyledSkill>
      <Icon iconId={p}/>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  
`