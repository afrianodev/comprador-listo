import {useRef, useState} from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const [uploadProfilePic, setUploadProfilePic] = useState(undefined)
  const fileRef = useRef(null)
  const {currentUser} = useSelector(state => state.user)
  const [formData, setFormData] = useState({})

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

    setUploadProfilePic(imageProfUrl)
    setFormData({...formData, avatar: imageProfUrl})
    console.log(formData)

  }
  return (
  <div className='flex flex-col mx-auto max-w-lg h-[100%] py-3'>
    <h1 className='text-3xl font-semibold text-center my-8'>Perfil</h1>
    <form className='flex flex-col gap-4 max-w-xl'>
      <input type='file' ref={fileRef} onChange={handleFileUpload} hidden accept='image/*' />
      <img src={formData.avatar || currentUser.avatar} alt="foto de perfil" className='rounded-full h-32 w-32 object-cover self-center cursor-pointer' onClick={() => fileRef.current.click()} />
      <input type="text" id='username' placeholder='Nombre de usuario' className='border p-3 outline-none rounded-lg' />
      <input type="email" id='email' placeholder='Email' className='border p-3 outline-none rounded-lg' />
      <input type="password" id='password' placeholder='Contraseña' className='border p-3 outline-none rounded-lg' />
      <button className='bg-slate-900 text-slate-100 font-semibold p-2 rounded-lg'>Actualizar</button>
    </form>
    <div className='flex justify-between mt-4 mb-6'>
      <span className='text-red-800 cursor-pointer'>Eliminar cuenta</span>
      <span className='text-red-800 cursor-pointer'>Cerrar sesión</span>
    </div>
    {uploadProfilePic ? <img className='w-32' src={uploadProfilePic} /> : <p>Sin foto</p>}
  </div>
  )
}
