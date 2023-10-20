import React, { ElementRef, useRef } from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import {S} from './Contacts_Styles'
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return

    emailjs.sendForm('service_62oz79f', 'template_zmy3jws', form.current, '8Q6wR9kzwSFEjfdJg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <S.Contacts id={"Contacts"}>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Label>Name</S.Label>
          <S.Field required name={"user_name"}/>
          <S.Label>Email</S.Label>
          <S.Field required name={"email"}/>
          <S.Label>Subject</S.Label>
          <S.Field required name={"subject"}/>
          <S.Label>Message</S.Label>
          <S.Field required as={"textarea"} name={"message"}/>
          <S.BoxButton>
            <Button bgc={"#1abcfe"} border={"2px solid #1abcfe"} type={"submit"}>Send</Button>
          </S.BoxButton>
        </S.Form>
      </Container>
    </S.Contacts>
  )
}
