import React, { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const firstnameSend = firstname.trim();
  const lastnameSend = lastname.trim();
  const emailSend = email.trim();
  const messageSend = message.trim();

  const isFormValid = (e) => {
    e.preventDefault();
    const errors = [];
    if (firstnameSend === '') errors.push('Le champ "Prénom" est obligatoire');
    if (firstnameSend.length > 255) errors.push('Le champ "Prénom" ne doit pas dépasser 255 caractères');
    if (lastnameSend === '') errors.push('Le champ "Nom" est obligatoire');
    if (lastnameSend.length > 255) errors.push('Le champ "Nom" ne doit pas dépasser 255 caractères');
    if (emailSend === '') errors.push('Le champ "E-mail" est obligatoire');
    if (emailSend.length > 255) errors.push('Le champ "E-mail" ne doit pas dépasser 255 caractères');
    if (!emailSend.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) errors.push('Votre email n\'est pas valide');
    if (messageSend === '') errors.push('Le champ "Message" est obligatoire');
    // eslint-disable-next-line no-alert
    if (errors.length > 0) return errors.forEach((error) => { alert(error); });
    return console.log('ok');
  };

  return (
    <form className="AppContactForm" onSubmit={isFormValid}>
      <label className="AppContactFormLabel" htmlFor="firstname">
        <p className="AppContactFormLabelText">Prénom</p>
        <input
          type="text"
          className="AppContactFormInput"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => { setFirstname(e.target.value); }}
        />
      </label>
      <label className="AppContactFormLabel" htmlFor="lastname">
        <p className="AppContactFormLabelText">Nom</p>
        <input
          type="text"
          className="AppContactFormInput"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => { setLastname(e.target.value); }}
        />
      </label>
      <label className="AppContactFormLabel" htmlFor="email">
        <p className="AppContactFormLabelText">E-mail</p>
        <input
          type="email"
          className="AppContactFormInput"
          name="email"
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
      </label>
      <label className="AppContactFormLabel" htmlFor="message">
        <p className="AppContactFormLabelText">Message</p>
        <textarea
          className="AppContactFormTextArea"
          name="message"
          id="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); }}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
