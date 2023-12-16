import React from 'react'
import { Parallax } from 'react-parallax';

const HeroSection = () => {
  return (
    <section>  
      <Parallax className='banner' bgImage="/assets/bird_1.jpg" strength={400}>
          <span>Photography</span>
      </Parallax>
    </section>

  )
}

export default HeroSection