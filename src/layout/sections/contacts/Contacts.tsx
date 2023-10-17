import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form>
          <S.Label>Name</S.Label>
          <S.Field />
          <S.Label>Email</S.Label>
          <S.Field />
          <S.Label>Message</S.Label>
          <S.Field as={"textarea"}/>
          <S.BoxButton>
            <Button bgc={"#1abcfe"} border={"2px solid #1abcfe"} type={"submit"}>Send</Button>
          </S.BoxButton>
        </S.Form>
      </Container>
    </S.Contacts>
  )
}
