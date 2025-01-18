import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({})
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)
  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // setLoading(true)
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)
      if(data.succes === false) {
        // setLoading(false)
        // setError(data.message)
        dispatch(signInFailure(data.message))
        return
      }
      // setLoading(false)
      // setError(null)
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      // setLoading(false)
      // setError(error.message)
      dispatch(signInFailure(error.message))
    }
  }
  console.log(formData)
  return (
    <div className='flex flex-col max-w-lg mx-auto h-[90vh] justify-center'>
      <h1 className='text-center text-4xl font-bold text-zinc-900 mb-6'>Iniciar sesión</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* Username Field */}
        {/* <div className='relative'>
          <input 
            type="text" 
            className='p-2 outline-none rounded-lg w-full' 
            placeholder='Usuario' 
            id='username'
            onChange={handleChange}  
          />
          <FaUser className='absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300' />
        </div> */}

        {/* Email Field */}
        <div className='relative'>
          <input 
            type="text" 
            className='p-2 outline-none rounded-lg w-full' 
            placeholder='Email' 
            id='email'
            onChange={handleChange}  
          />
          <FaEnvelope className='absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300' />
        </div>

        {/* Password Field */}
        <div className='relative'>
          <input 
            type="password" 
            className='p-2 outline-none rounded-lg w-full' 
            placeholder='Contraseña' 
            id='password'
            onChange={handleChange} 
          />
          <FaLock className='absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300' />
        </div>

        <button disabled={loading} className='bg-zinc-900 text-slate-100 rounded-lg py-2 hover:opacity-90'>{loading ? 'Iniciando sesión...' : 'Entrar'}</button>
        <OAuth />
      </form>
      <p className='mt-2'>¿No tienes una cuenta? <Link to='/sign-up'><span className='text-blue-700 font-medium'>Registrarse</span></Link></p>
      <div>{error && <p className='text-red-800'>{error}</p>}</div>
    </div>
  );
}
