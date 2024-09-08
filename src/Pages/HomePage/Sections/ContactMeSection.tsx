import React from 'react'
import SectionContainer from '../HomepageUi/SectionContainer';
import SectionInfo from '../HomepageUi/SectionInfo';
import ContactMeForm from '../HomepageUi/ContactMEUi/ContactMeForm';

export default function ContactMeSection() {
  return (
    <SectionContainer>
      <SectionInfo>
        <SectionInfo.Subtitle>Contact</SectionInfo.Subtitle>
        <SectionInfo.Title>Get In Touch</SectionInfo.Title>
        <SectionInfo.Description>
          If you have any suggestion, project or even you want to say “hello”,
          please fill out the form below and I will reply you shortly.
        </SectionInfo.Description>
      </SectionInfo>

      <ContactMeForm />
    </SectionContainer>
  );
}
