import React, { useState, useEffect } from 'react';
import heroImg from '../assets/img/mac.png';


const Hero = () => {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [circle2Pos, setCircle2Pos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const angle = (Date.now() / 1000) * Math.PI * 2 * 0.1;
      const radius = 200;

      setCirclePos({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });

      setCircle2Pos({
        x: centerX + radius * Math.cos(angle + Math.PI),
        y: centerY + radius * Math.sin(angle + Math.PI),
      });
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='z-0 relative'>
        <div
          className='circle animated z-0'
          style={{
            left: circlePos.x - 50,
            top: circlePos.y - 50,
          }}
        />
        <div
          className='circle2 animated z-0'
          style={{
            left: circle2Pos.x - 50,
            top: circle2Pos.y - 50,
          }}
        />
        <img className='img__hero z-10' src={heroImg} alt='' />
      </div>
      <div className='container mx-auto h-full z-50'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Bonjour ! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Je construis <br /> Votre site Web.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Développeur Web basé à Miramas,
              spécialisé dans le Référencement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
