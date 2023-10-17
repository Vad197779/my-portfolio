import React from 'react'
import {S} from './DesktopMenu_Styles'
import { Menu } from '../../../components/menu/Menu';

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems}/>
    </S.DesktopMenu>
  );
}
