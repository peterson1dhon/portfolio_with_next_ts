/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
          src="/assets/ghibliFlix.webp" alt="gibliFlix" 
       />

       <div className='px-0 ad:px-10'>
        <h4 className='text-4xl font-light'> Desafio Full-Stack </h4>
        <p className='font-bold text-2xl mt-1'> Studio GibliFlix </p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="javaScript" 
           />
           <img
            className='h-10 w-10 rounded-full'
            src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="javaScript" 
           />
           <img
            className='h-10 w-10 rounded-full'
            src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="javaScript" 
           />
        </div>
        <p className='uppercase py-5 text-gray-300'> Desafio Iniciado... - finalizado ... </p>
        
        <ul className=' list-disc space-y-4 ml-5 text-lg '>
          <li> Pontos para resumo </li>
          <li> Pontos para resumo </li>
          <li> Pontos para resumo </li>
          <li> Pontos para resumo </li>
          <li> Pontos para resumo </li>
        </ul>
       </div>
    </article>
  )
}

export default ExperienceCard