import React from 'react'
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="">
      <Icon width={"21"} height={'21'} viewBox={"0 0 21 21"} iconId={'logo'}/>
      <h2>Vadim Kovtunenko</h2>
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  align-items: center;
`
const Title = styled.h2
