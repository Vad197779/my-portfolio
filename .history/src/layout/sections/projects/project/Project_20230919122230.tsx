import React from 'react'
import styled from 'styled-components'

type ProjectPropsType = {
  title: string
  text: string
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>View Project</Link>
      </ProjectBox>
      <Image src={props.src} alt="" />
    </StyledProject>
  )
}

const StyledProject = styled.div`
  max-width: 992px;
  width: 100%;
  display: flex;
  border-radius: 24px;
  background-color: #fff;
  overflow: hidden;
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
