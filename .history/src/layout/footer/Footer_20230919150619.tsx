import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        <SocialLink>
          <Icon iconId={"instagram"}/>
        </SocialLink>
      </SocialList>
      <Copyright>Madelyn Torff 2021 </Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialIconList = styled.ul`
  
`
const SocialIconLink = styled.a`
  
`
const Copyright = styled.small`
  
`