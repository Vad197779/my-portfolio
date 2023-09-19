import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon width={"50px"} height={"50px"} viewBox={"-"} iconId={"instagram"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"50px"} height={"50px"} viewBox={"-"} iconId={"telegram"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"50px"} height={"50px"} viewBox={"-"} iconId={"viber"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"50px"} height={"50px"} viewBox={"-"} iconId={"whatsapp"}/>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>Madelyn Torff 2021 </Copyright>
        <Icon width={"1440"} height={"344"} viewBox={"0 0 1440 344"} iconId={"vector"} />
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`
const SocialList = styled.ul`
  display: flex;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  
`
const Copyright = styled.small`
  
`