import React from 'react';
import { PhoneIcon,MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
 name: string;
 email: string;
 subject: string;
 message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contate-me
        </h3>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-3xl pt-4 font-semibold text-center'>
            Eu tenho apena o que você precisa.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>vamos conversar</span>
          </h4>

          <div className='space-y-6'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>+55 (15) 99785-1492</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>peterson.br94@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>Jacó Abrame 561 - Tatuí/SP</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input 
              {...register('name')} 
              placeholder='Nome' 
              className='contactInput' 
              type="text" 
              />

              <input 
              {...register('email')} 
              placeholder='E-mail' 
              className='contactInput' 
              type="email" 
              />
            </div>

            <input 
            {...register('subject')} 
            placeholder='Assunto' 
            className='contactInput' 
            type="text" 
            />

            <textarea 
            {...register('message')} 
            placeholder='mensagem' 
            className='contactInput' 
            
            />
            <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'> Enviar </button>
          </form>
          
        </div>
    </div>
  );
}

export default ContactMe;