import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='bg-slate-200' style={{ boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className='flex flex-col mx-auto pt-6'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start w-[90%] mx-auto'>
                <div className='hidden sm:inline'>
                    <h2 className='text-slate-600 font-bold text-xl cursor-pointer'>Comprador<span className='text-zinc-900'>Listo</span></h2>
                    <div className='mt-2'>
                        <h2 className='font-semibold text-zinc-900 mb-2'>Newsletter</h2>
                        <form className='flex flex-col gap-2'>
                            <div className='relative flex items-center'>
                                <input type="text" placeholder='Email' className='bg-slate-100 p-1 rounded-lg outline-none' />
                                <MdEmail className='text-[20px] absolute right-3 text-zinc-300' />
                            </div>
                            <button className='bg-zinc-900 p-1 text-slate-100 rounded-lg'>Suscribirse</button>
                        </form>
                    </div>
                </div>
                <div className='text-slate-700 flex flex-row sm:flex-col gap-2 text-sm font-semibold'>
                    <p className='select-none cursor-pointer hover:text-slate-500 hover:underline'>Sobre nosotros</p>
                    <p className='select-none cursor-pointer hover:text-slate-500 hover:underline'>Preguntas frecuentes</p>
                    <p className='select-none cursor-pointer hover:text-slate-500 hover:underline'>Terminos y condiciones</p>
                    <p className='select-none cursor-pointer hover:text-slate-500 hover:underline'>Politica de privacidad</p>
                </div>
                <div>
                    <p className='font-bold text-zinc-900'>Contactanos</p>
                    <p className='text-slate-700 flex items-center'><span className='text-zinc-900 mr-2'><FaPhone /></span>+52 5555 555 555</p>
                    <p className='text-slate-700 flex items-center'><span className='text-zinc-900 mr-2'><MdEmail /></span>contacto@compradorlisto.com</p>
                    <div className='text-zinc-900 flex gap-4 text-[22px] items-center mt-4'>
                        <FaFacebook />
                        <AiFillInstagram />
                        <ImYoutube />
                    </div>
                </div>
            </div>
            <div className='bg-slate-700 h-[1px] w-[90%] mt-4 mx-auto'>
            </div>
            <div className='text-xs my-4 mx-auto'>
                {currentYear} © <span className='font-semibold'>CompradorListo</span> | Todos los derechos reservados
            </div>
        </div>
    </footer>
  )
}
