import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        <SocialI>
          <SocialLink>
            <Icon iconId={"instagram"}/>
          </SocialLink>
        </SocialI>
      </SocialList>
      <Copyright>Madelyn Torff 2021 </Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialList = styled.ul`
  
`
const SocialLink = styled.a`
  
`
const Copyright = styled.small`
  
`