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
  margin-bottom: 74px;
  margin-left: 60px;
  gap: 100px;
`