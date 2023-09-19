import React from 'react'
import styled from 'styled-components'

type ProjectPropsType = {
  title: string
  text: string
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProjects>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>View Project</Link>
      <Image src={props.src} alt="" />
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  max-width: 992px;
`
const Title = styled.h3`
  
`
const Text = styled.p`
  
`
const Link = styled.a`
  
`
const Image = styled.img`
  width: 495;
`
