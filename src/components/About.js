import React from 'react';

// import img
import Image from '../assets/img/about.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[550px] md:mx-auto lg:mx-0 rounded-2xl img__about'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Nicolas Simonet
              </h2>
              <p className='mb-4 text-accent'>
                Développeur Web Front-End Freelance
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Bonjour, <br />
              Je m'appelle Nicolas, j'ai 21 ans et je suis Développeur Web Front-End depuis 2 ans maintenant !
              Je travaille principalement avec React.js, je fais également beaucoup d'intégration Web.
              Je suis quelqu'un de très impliqué dans mon travail, je donne constamment le meilleur de moi-même.
                <br />
                <br />
                Appréciant fortement le travail d'équipe, j'aime me lancer à 100% dans des projets ! <br />
                À très bientôt ! 👋
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
