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
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialIconList = styled.div`
  
`
const SocialIconLink = styled.a`
  
`