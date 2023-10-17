import React from 'react'
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

export const Logo: React.FC = () => {
  return (
    <Link href="#">
      <Icon width={"23"} height={"23"} viewBox={"0 0 23 23"} iconId={'logo'}/>
      <Title>Vadim Kovtunenko</Title>
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: transform 0.2s ease-in-out;
  }
`
const Title = styled.h2`
  ${font({family: "'Comfortaa', sans-serif", color: theme.colors.firstTitle, Fmax: 18, Fmin: 16, weight: 700})}
  margin-left: 10px;

  &:hover {
    background-image: linear-gradient(130deg, #0c41ac 10%, #2d9b1a 60%, #367ec1 80%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`
