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
      <Image src={pr} alt="" />
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  
`
const Title = styled.h3`
  
`
const Text = styled.p`
  
`
const Link = styled.a`
  
`
const Image = styled.h3`
  
`
