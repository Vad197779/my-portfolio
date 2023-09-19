import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"viber"}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>Madelyn Torff 2021 </Copyright>
      <Icon width={"1440"} height={"344"} viewBox={"0 0 1440 344"} iconId={"vector"} />
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