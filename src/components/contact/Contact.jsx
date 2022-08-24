import React from 'react';
import ContactForm from '../contact-form/ContactForm';
import './Contact.scss';
import contactGif from '../../assets/images/background/Envelope.gif';

export default function Contact() {
  return (
    <section className="AppContact">
      <h2 className="AppContactTitle">Contact</h2>
      <div className="AppContactFormContainer">
        <img className="AppContactPicture" src={contactGif} alt="Illustration animée d'une enveloppe géante sur laquelle un petit bonhomme colle un timbre" />
        <ContactForm />
      </div>
    </section>
  );
}
