import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: ${theme.colors.firstTitle};

  &:before {
    content: "";
    display: inline-block;
    width: 100px;
  }
`