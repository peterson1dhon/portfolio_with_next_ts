// tsrfc
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flow-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Sobre
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            src="/assets/about.png" className='-md-20 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Aqui esta um {" "}
                <span className='underline decoration-[#F7AB0A]/50'>Pouco</span>{" "}
                a fundo sobre min
            </h4>
            <p className='text-base'>
                Eu sou Peterson tenho 28 anos casado, Já codo há mais de 1 ano. Como profissional  trabalhei com grandes corporações internacionais a ajudar a construir e escalar suas empresas como técnico em manutenção. Ao longo da jornada, percebi que minha paixão existia em desenvolver criar algo ajudar os outros. Essa paixão dispertou no dia que assistindo videos do "guanabara" decidi ir mais a fundo foi quando adquiri um curso <span className='underline decoration-[#F7AB0A]/50'>Full-Stack do programador BR</span> em setembro de 2021, quando terminei abri meu gitHub e comecei meu repositório muitos não são de minha autoria, são de video aulas assim pude por em pratica o que aprendi. Estou em transição de carreira em busca de oportunidade para por em pratica meus conhecimentos e ajudar o time.
            </p>
        </div>
    </motion.div>
  )
}