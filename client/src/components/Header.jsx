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
                <h1 className='text-slate-600 font-bold text-2xl cursor-pointer'>Comprador<span className='text-zinc-900'>Listo</span></h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
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
                    :<li className='hidden sm:inline text-slate-700 font-semibold hover:underline hover:text-slate-500 select-none cursor-pointer'>Entrar</li>}
                    
                </Link>
            </ul>
        </div>
    </header>
  )
}
