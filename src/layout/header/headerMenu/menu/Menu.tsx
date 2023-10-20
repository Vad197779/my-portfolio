import React from 'react'
import {S} from '../HeaderMenu_Styles'

const items = [
  {
    title: "About",
    href: "About"
  },
  {
    title: "Skills",
    href: "Skills"
  },
  {
    title: "Projects",
    href: "Projects"
  },
  {
    title: "Contacts",
    href: "Contacts"
  },
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return(
          <S.ListItem key={index}>
            <S.NavLink
              activeClass="active"
              to={item.href}
              smooth={true}
              spy={true}
              offset={-5.8}
            >{item.title}</S.NavLink>
          </S.ListItem>
        )
      })}
    </ul>
  );
}
