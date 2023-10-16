import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type ButtonPropsType = {
  brd?: string
  border?: string
  bgc?: string

}

export const Button = styled.button<ButtonPropsType>`
  border-radius: ${props => props.brd || "8px"};
  border: ${props => props.border || "2px solid #25282B"};
  background-color: ${props => props.bgc || "transparent"};
  padding: 8px 24px;
  ${font({family: "'Roboto', sans-serif", color: theme.colors.firstTitle, Fmax: 18, Fmin: 16, weight: 500})}
  transition: transform 0.2s ease-in-out color 0.2s ease;


  &:hover {
    cursor: pointer;
    background-image: linear-gradient(130deg, #0c41ac 10%, #2d9b1a 60%, #367ec1 80%);
    color: #1abcfe;
    
    border: 2px solid #1abcfe;
    transform: scale3d(1.1, 1.1, 1.1);
    transition: transform 0.2s ease-in-out;
  }
`