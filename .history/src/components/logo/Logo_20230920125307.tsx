import React from 'react'
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="">
      <Icon width={"32"} height={'32'} viewBox={"0 0 32 32"} iconId={'logo'}/>
      <h2>Vadim Kovtunenko</h2>
    </Link>
  );
}

const Link = styled.a`
  display: inline-block;
`