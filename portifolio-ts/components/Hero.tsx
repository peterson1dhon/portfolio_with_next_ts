/* eslint-disable @next/next/no-img-element */
// atalho react+es7 tsrfc
import Link from 'next/link';
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
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Full Stack developer
          </h2>
          <h1 className='text-5xl lg-text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
          </h1>

          <div className='pt-5'>
            <Link href="#about">
            <button className="heroButton">Sobre</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experiencia</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Habilidades</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projetos</button>
            </Link>
          </div>
        </div>
    </div>
  );
}
