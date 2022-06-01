import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
            >
              <a href={brand.href} target="__blank" rel="noopener, noreferrer" ><img src={brand.img} alt='' className='img__brands'/></a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
