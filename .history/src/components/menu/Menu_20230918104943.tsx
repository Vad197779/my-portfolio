import React from 'react'
import styled from 'styled-components';

export const Menu = () => {
  return (
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
  );
}

const StyledMenu = styled.nav