import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/Button'

type ProjectPropsType = {
  title: string
  text: string
  src: string
}

type StyledProjectPropsType = {
  direction?: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">
          <Button brd={"24px"} bgc={"transparent"} border={"1px solid #25282B"}>View Project
          </Button>
        </Link>
      </ProjectBox>
      <Image src={props.src} alt="" />
    </StyledProject>
  )
}

const StyledProject = styled.div<StyledProjectPropsType>`
  max-width: 992px;
  width: 100%;
  display: flex;
  flex-direction: ${props =L};
  border-radius: 24px;
  background-color: #e6dada;
  overflow: hidden;
  margin-top: 80px;
`
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  
`
const Text = styled.p`
  
`

const Link = styled.a`
  
`
const Image = styled.img`
  width: 100%;
  max-width: 496px;
  height: 526px;
  object-fit: cover;
`
