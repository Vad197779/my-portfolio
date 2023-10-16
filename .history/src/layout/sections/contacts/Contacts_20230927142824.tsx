import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <Label>Name</Label>
          <Field />
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

  textarea {
    resize: none;
    
  }
`
const Label = styled.label`
  margin-bottom: 8px;
`
const Field = styled.input`
  width: 100%;
  min-height: 40px;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  background-color: ${theme.colors.secondTitle};
  margin-bottom: 24px;
  padding: 8px;


  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.firstTitle};
`
const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
`