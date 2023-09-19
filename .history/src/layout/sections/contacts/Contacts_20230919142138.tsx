import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <Label>Email</Label>
        <Field placeholder={""}/>
        <Label>Email</Label>
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
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Label = styled.label`
  
`
const Field = styled.input`
  
`