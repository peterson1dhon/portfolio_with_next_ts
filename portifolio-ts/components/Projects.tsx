/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1.5 }}
        transition={{ duration: 1.5 }}
    
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projetos
            </h3>

            <div className='relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((projects, i) => (
                    <div key={projects} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="/assets/projects.png" alt="" 
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                Estudo de caso {i + 1} de {projects.length}:
                                </span>{" "}
                                Teste
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Aplicativo que contem autencticação com google.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
  );
}

export default Projects