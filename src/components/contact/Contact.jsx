/* eslint-disable react/prop-types */
import React from 'react';
import ContactForm from '../contact-form/ContactForm';
import './Contact.scss';
import contactGif from '../../assets/images/background/Envelope.gif';
import pdfCV from '../../assets/documents/Vincent_Dubresson_CV.pdf';

export default function Contact(props) {
  const { contactRef } = props;
  return (
    <section className="AppContact" ref={contactRef}>
      <h2 className="AppContactTitle">Contact</h2>
      <p className="AppContactText">
        Merci d&#39;avoir pris quelques minutes pour parcourir
        mon portfolio. N&#39;hésitez pas à m&#39;envoyer un message !
        Je ne manquerai pas de vous répondre. Si vous souhaitez en connaître
        d&#39;avantage sur moi, vous pouvez télécharger mon Curriculum Vitae directement
        {' '}
        <a className="AppContactTextSpan" href={pdfCV} download><b>ici</b></a>
        , ou en cliquant sur l&#39;icone dans la barre de navigation. À bientôt !
      </p>
      <div className="AppContactFormContainer">
        <img className="AppContactPicture" src={contactGif} alt="Illustration animée d'une enveloppe géante sur laquelle un petit bonhomme colle un timbre" />
        <ContactForm />
      </div>
    </section>
  );
}
