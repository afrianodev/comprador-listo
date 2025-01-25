import {useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserStart, signOutUserFailure, signOutUserSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Profile() {
  const fileRef = useRef(null)
  const {currentUser, loading, error} = useSelector(state => state.user)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  console.log(formData)
  const dispatch = useDispatch()

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]

    if(!file) return
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'profile-pic-comprador-listo')
    data.append('cloud_name', 'dpodycir5')

    const res = await fetch('https://api.cloudinary.com/v1_1/dpodycir5/image/upload', {
      method: 'POST',
      body: data
    })

    const uploadImageURL = await res.json()
    const imageProfUrl = uploadImageURL.url

    setFormData({...formData, avatar: imageProfUrl})
    console.log(formData)

  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if(data.success === false) {
        dispatch(updateUserFailure(data.message))
        return
      }

      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)

    } catch (error) {
      dispatch(updateUserFailure(error.message))
    }

  }

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE'
      })
      const data = await res.json()
      if(data.success === false) {
        dispatch(deleteUserFailure(data.message))
        return
      }
      dispatch(deleteUserSuccess(data))
      
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout')
      const data = await res.json()
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message))
        return;
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      
    }
  }

  return (
  <div className='flex flex-col mx-auto max-w-lg h-[100%] py-3'>
    <h1 className='text-3xl font-semibold text-center my-8'>Perfil</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-xl'>
      <input type='file' ref={fileRef} onChange={handleFileUpload} hidden accept='image/*' />
      <img src={formData.avatar || currentUser.avatar} alt="foto de perfil" className='rounded-full h-32 w-32 object-cover self-center cursor-pointer' onClick={() => fileRef.current.click()} />
      <input type="text" id='username' placeholder='Nombre de usuario' className='border p-3 outline-none rounded-lg'
      defaultValue={currentUser.username} onChange={handleChange} />
      <input type="email" id='email' placeholder='Email' className='border p-3 outline-none rounded-lg'
      defaultValue={currentUser.email} onChange={handleChange} />
      <input type="password" id='password' placeholder='Contraseña' className='border p-3 outline-none rounded-lg'
      onChange={handleChange} />
      <button disabled={loading} className='bg-slate-900 text-slate-100 font-semibold p-2 rounded-lg hover:opacity-90'>{loading ? 'Actualizando...' : 'Actualizar'}</button>
      <Link className='bg-teal-900 text-slate-100 font-semibold p-2 rounded-lg text-center hover:opacity-90' to={'/publicar-comprador'}>Publicar Comprador</Link>
      <Link className='bg-teal-900 text-slate-100 font-semibold p-2 rounded-lg text-center hover:opacity-90' to={'/create-listing'}>Publicar Inmueble</Link>
    </form>
    <div className='flex justify-between mt-4 mb-2'>
      <span className='text-red-800 cursor-pointer' onClick={handleDeleteUser}>Eliminar cuenta</span>
      <span className='text-red-800 cursor-pointer' onClick={handleSignOut}>Cerrar sesión</span>
    </div>
    <p className='text-red-700 mt-2 text-sm'>{error ? error : ''}</p>
    <p className='text-green-700 text-sm font-semibold mb-4'>{updateSuccess ? 'Usuario actualizado correctamente' : ''}</p>
  </div>
  )
}
