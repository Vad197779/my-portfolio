import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  color: ${theme.colors.firstTitle};
  /* position: relative; */

  &:before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }
`