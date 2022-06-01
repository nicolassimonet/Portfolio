import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center card__project'>
      <div className='mb-8 img__project'>
        <a href={item.link}><img className='rounded-2xl' src={item.image} alt=''/></a>
      </div>
      <p className='capitalize text-accent text-sm mb-5'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>{item.description}</p>
      <p className='capitalize text-accent text-sm mt-5 tech__project'>{item.tech}</p>
    </div>
  );
};

export default Project;
