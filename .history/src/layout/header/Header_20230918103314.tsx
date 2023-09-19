import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
      <a href="">
        <img src="" alt="" />
        <h2>Vadim Kovtunenko</h2>
      </a>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #36affa;
`
