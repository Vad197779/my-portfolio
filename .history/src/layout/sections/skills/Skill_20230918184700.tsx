import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
  iconId: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  margin: 20px;
  background-color: rgba(255, 255, 255);
`