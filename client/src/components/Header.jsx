import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Header() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <div className='flex items-center'>
                    <img src="https://res.cloudinary.com/dpodycir5/image/upload/v1745099472/n9i7ihrzaic65kevetiz.png" alt="Logo de comprador listo, el marketplace lider de agentes inmobiliarios" className='w-12' />
                    <h1 className='text-[#333333] font-bold text-xl sm:text-2xl cursor-pointer select-none family'>Comprador<span className='text-[#097491]'>Listo</span></h1>
                </div>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg items-center hidden sm:flex'>
                <input type="text" placeholder='Buscar' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-400 cursor-pointer' />
            </form>
            <ul className='flex gap-8 items-center'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 font-semibold hover:underline hover:text-slate-500 select-none cursor-pointer'>Inicio</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 font-semibold hover:underline hover:text-slate-500 select-none cursor-pointer'>Inmuebles</li>
                </Link>
                <Link to='/profile'>
                    {currentUser ? <img src={currentUser.avatar} alt="foto de perfil" className='rounded-full h-10 object-cover' />
                    :<li className='text-slate-700 font-semibold hover:underline hover:text-slate-500 select-none cursor-pointer'>Entrar</li>}
                    
                </Link>
            </ul>
        </div>
    </header>
  )
}
