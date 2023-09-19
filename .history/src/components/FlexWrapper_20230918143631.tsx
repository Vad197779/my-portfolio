import { type } from "os";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
}

const FlexWrapper = styled.div`
  display: flex;
`