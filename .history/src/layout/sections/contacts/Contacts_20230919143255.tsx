import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <Label>Name</Label>
        <Field placeholder={""}/>
        <Label>Email</Label>
        <Field />
        <Label>Message</Label>
        <Field as={"textarea"}/>
        <Button ty>Send</Button>
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
`
const Label = styled.label`
  
`
const Field = styled.input`
  
`