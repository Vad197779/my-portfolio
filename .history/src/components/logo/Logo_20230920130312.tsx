import React from 'react'
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Link href="">
      <Icon width={"20"} height={'20'} viewBox={"0 0 20 20"} iconId={'logo'}/>
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
