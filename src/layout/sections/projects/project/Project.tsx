import React from 'react'
import { Button } from '../../../../components/Button'
import {S} from '../Project_Styles'

type ProjectPropsType = {
  title: string
  text: string
  src: string
  link: string
  even: boolean
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project even={props.even}>
      <S.ProjectBox>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Link href={props.link} target="_blank" rel="noopener noreferrer">
          <Button brd={"24px"} border={"2px solid #25282B"}>View Project
          </Button>
        </S.Link>
      </S.ProjectBox>
      <S.Image src={props.src} alt="" />
    </S.Project>
  )
}
