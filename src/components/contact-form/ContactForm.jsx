import React, { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm() {
  const [firstname, setFirstname] = useState('');

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="AppContactForm" onSubmit={submit}>
      <label className="AppContactFormLabel" htmlFor="firstname">
        <p className="AppContactFormLabelText">Prénom</p>
        <input
          type="text"
          className="AppContactFormInput"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => { setFirstname(e.target.value); }}
          required
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
