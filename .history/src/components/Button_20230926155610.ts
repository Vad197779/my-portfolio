import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsT

export const Button = styled.button`
  padding: 8px 24px;
  border-radius: 8px;
  background-color: ${theme.colors.accent};
  margin-right: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.firstTitle};

  &:hover {
    cursor: pointer;
  }
`