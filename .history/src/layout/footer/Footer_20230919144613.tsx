import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconList>
        <SocialIconLink>
          <Icon iconId/>
        </SocialIconLink>
      </SocialIconList>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`