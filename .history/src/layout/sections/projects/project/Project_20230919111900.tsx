import React from 'react'
import styled from 'styled-components'

type ProjectPropsType = {
  title: st
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProjects>
      <Title></Title>
      <Text></Text>
      <Link href={"#"}>View Project</Link>
      <Image src="" alt="" />
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
