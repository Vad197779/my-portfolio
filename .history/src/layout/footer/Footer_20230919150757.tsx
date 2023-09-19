import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"vib"}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>Madelyn Torff 2021 </Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialList = styled.ul`
  
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  
`
const Copyright = styled.small`
  
`