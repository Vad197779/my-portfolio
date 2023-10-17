import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
  iconId: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
`