import React, { useState } from 'react';

// import contact data
import { contact } from '../data';

import { db } from '../firebase'


const Contact = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    db.collection('contact').add({
      name:name,
      mail:mail,
      subject:subject,
      message:message,
    })
    .then(() => {
      alert('Message envoyé 👍')
    })
    .catch((error) => {
      alert(error.message)
    });

    setName('');
    setMail('');
    setSubject('');
    setMessage('');
  }

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-20 before:hidden before:lg:block'>
            Contactez-moi
          </h2>
          <p className='subtitle'>
             Obtenez une solution web sur mesure pour votre entreprise <br/> - <br/> Contactez-moi pour discuter de vos besoins en solution web
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description, emaildescription } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='font-normal '>{description}</p>
                    <p className='text-accent font-normal '>{emaildescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Votre Nom' value={name} onChange={(e) => setName(e.target.value)} />
              <input className='input' type='email' placeholder='Votre E-mail' value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <input className='input' type='text' placeholder='Objet' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea
              className='textarea'
              placeholder='Votre message'
              value={message} onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type='submit' className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
