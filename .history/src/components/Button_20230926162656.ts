import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  brd?: string
  bgc?: string
  border?: string
  
}

export const Button = styled.button<ButtonPropsType>`
  border-radius: ${props => props.brd || "8px"};
  background-color: ${props => props.bgc || "#1abcfe"};
  border: ${props => props.border || "none"};
  padding: 8px 24px;
  border-radius: 8px;
  margin-right: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.firstTitle};

  &:hover {
    cursor: pointer;
  }
`