import React from 'react'
import styled from 'styled-components';

export const Menu = (props: {m}) => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`