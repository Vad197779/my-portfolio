import React from 'react'
import {S} from './DesktopMenu_Styles'

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  return (
    <S.DesktopMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return(
            <S.ListItem key={index}>
              <S.Link href="">{item}</S.Link>
            </S.ListItem>
          )
        })}
      </ul>
    </S.DesktopMenu>
  );
}
