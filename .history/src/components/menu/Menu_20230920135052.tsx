import React from 'react'
import styled from 'styled-components';

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>

        {props.menuItems.map((item, index) => {
          return(
            <li ke>
              <a href="">{item}</a>
            </li>
          )
        })}
        
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