import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconList>
        <SocialIconLink>
          <Icon iconId={"instagram"}/>
        </SocialIconLink>
      </SocialIconList>
      <copyright></copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialIconList = styled.ul`
  
`
const SocialIconLink = styled.a`
  
`
const copyright = styled.`
  
`