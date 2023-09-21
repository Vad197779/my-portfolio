import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return(
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 48pxpx;
  }
`
const ListItem = styled.li`
  
`
const Link = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.firstTitle};
`