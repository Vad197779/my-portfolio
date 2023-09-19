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
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>View Project</Link>
      <Image src={props.src} alt="" />
    </StyledProject>
  )
}

const StyledProjects = styled.div`
  max-width: 992px;
  display: flex;
`
const Title = styled.h3`
  
`
const Text = styled.p`
  
`
const Link = styled.a`
  
`
const Image = styled.img`
  width: 496px;
  height: 526px;
`
