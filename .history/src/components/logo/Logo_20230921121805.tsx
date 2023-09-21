import React from 'react'
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="">
      <Icon width={"23"} height={'23'} viewBox={"0 0 23 23"} iconId={'logo'}/>
      <Title>Vadim Kovtunenko</Title>
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  align-items: center;
`
const Title = styled.h2`
  margin-left: 10px;
  
`
