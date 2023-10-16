import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  brd?: string
  bgc?: string
  border?: string
  mgr?: string

  btnType?: "solid" | "bordered"
  color: string
  bgColor?: string
}

export const Button = styled.button<ButtonPropsType>`
  border-radius: ${props => props.brd || "8px"};
  /* background-color: ${props => props.bgc || "#1abcfe"}; */
  border: ${props => props.border || "none"};
  margin-right: ${props => props.mgr || "none"};
  padding: 8px 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.firstTitle};
  flex: 0 0 auto;

  ${props => props.btnType === 'solid' && css`
    background-color: "yellow";
    color: "white";
  `}
  &:hover {
    cursor: pointer;
  }
`