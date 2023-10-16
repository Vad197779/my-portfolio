import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  brd?: string
  border?: string


  btnType?: "solid" | "bordered"
  color?: string
  bgColor?: string
}

export const Button = styled.button<ButtonPropsType>`
  border-radius: ${props => props.brd || "8px"};
  padding: 8px 24px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.firstTitle};

  ${props => props.btnType === 'solid' && css`
    background-color: "#1abcfe";

  `}

  ${props => props.btnType === 'bordered' && css<ButtonPropsType>`
    background-color: "transparent";
    border: ${props => props.border}
  `}

  &:hover {
    cursor: pointer;
  }
`