// import React from 'react'
import { useLottie } from 'lottie-react';
import './home.css';
import animation from '../../assets/animation.json';

export function Home() {
  const options = {
    animationData: animation,
    loop: true,
    style: { maxWidth: 500, maxHeight: 500 }
  };
  const { View } = useLottie(options);

  return (
    <section id="home" className="slide-in-element">
      <div className="upper">
        <div className="divide">
          <h1 className="jargon">Lorem. ipsum. dolor. sit amet.</h1>
          <h3 className='jargon-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti eos ratione, voluptatum dolores
            doloribus.</h3>
        </div>
        <>{View}</>
      </div>

    </section>
  )
}
