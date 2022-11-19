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
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="./assets/bg.png" alt="" 
        />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  );
}
