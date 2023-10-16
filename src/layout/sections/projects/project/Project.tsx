import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/Button'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

type ProjectPropsType = {
  title: string
  text: string
  src: string
  link: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={props.link} target="_blank" rel="noopener noreferrer">
          <Button brd={"24px"} border={"2px solid #25282B"}>View Project
          </Button>
        </Link>
      </ProjectBox>
      <Image src={props.src} alt="" />
    </StyledProject>
  )
}


const StyledProject = styled.div`
  max-width: 992px;
  min-height: 526px;
  width: 100%;
  display: flex;
  border-radius: 24px;
  background-color: ${theme.colors.secondTitle};
  overflow: hidden;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.10);

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media ${theme.media.tablet} {
    max-width: 496px;
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 45px;
  flex: 1;
  max-width: 50%;

  @media ${theme.media.tablet} {
    padding: 45px;
    align-items: center;
    max-width: 100%;
  }
`

const Title = styled.h3`
  ${font({family: "'Playfair Display', sans-serif", color: theme.colors.firstTitle, Fmax: 40, Fmin: 24, weight: 700})}
`
const Text = styled.p`
  ${font({color: theme.colors.font, Fmax: 18, Fmin: 16, weight: 400})}
  margin: 24px 0;
`

const Link = styled.a`
  
`
const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  flex: 1;
  max-width: 50%;

  @media ${theme.media.tablet} {
    max-width: 100%;
  }
`
