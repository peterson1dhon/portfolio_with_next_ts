/* eslint-disable @next/next/no-img-element */
// atalho react+es7 tsrfc
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Oi, meu nome é Peterson Da Silva Caetano",
            "Gosto de Café e Desenvolver",
            "<ButtonLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative border border-white rounded-full h-40 w-40 mx-auto object-cover"
          src="/assets/bg.png" alt="perfil" 
        />
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Full Stack developer
        </h2>
        <h1 className='text-5xl lg-text-6xl font-semibold px-10'>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div>
          <button className="heroButton">Sobre</button>
          <button className="heroButton">Experiencia</button>
          <button className="heroButton">Habilidades</button>
          <button className="heroButton">Projetos</button>
        </div>
    </div>
  );
}
