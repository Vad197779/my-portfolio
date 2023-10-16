import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <Label>Name</Label>
          <Field placeholder={""}/>
          <Label>Email</Label>
          <Field />
          <Label>Message</Label>
          <Field as={"textarea"}/>
          <BoxButton>
            <Button type={"submit"}>Send</Button>
          </BoxButton>
        </StyledForm>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Label = styled.label`
  
`
const Field = styled.input`
  
`
const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
`