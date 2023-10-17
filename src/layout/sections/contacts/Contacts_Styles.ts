import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Contacts = styled.section`

`
const Form = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 160px;
  }
`
const Label = styled.label`
  margin-bottom: 8px;
`
const Field = styled.input`
  width: 100%;
  min-height: 40px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.outline};
  background-color: ${theme.colors.secondTitle};
  margin-bottom: 24px;
  padding: 8px;
  
  ${font({color: theme.colors.firstTitle, Fmax: 16, Fmin: 14, weight: 600})}

  &:focus-visible {
    outline: 1px solid ${theme.colors.outline};
  }
`
const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const S = {
  Contacts,
  Form,
  Label,
  Field,
  BoxButton
}