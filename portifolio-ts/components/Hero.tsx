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
    <div>
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  );
}
