import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <Field />
        <Field />
        <Field as={"textarea"}/>
      </StyledForm>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  background-color: #f1ebbc;
  min-height: 50vh;
`
const StyledForm = styled.form`

`
const Field = styled.input`
  
`