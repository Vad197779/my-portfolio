import { type } from "os";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify};
`