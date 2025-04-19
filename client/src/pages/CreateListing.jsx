import React, { useState } from 'react'

export default function CreateListing() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    adress: '',
    price: 0,
    percentage: 0
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }

  console.log(formData)
  return (
    <main className='p-6 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold text-center my-8'>Publicar Inmueble</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-2 flex-1'>
            <input type="text" placeholder='Título' id='title' className='p-2 rounded-lg border outline-none' required onChange={handleChange} value={formData.title} />
            <textarea id="description" placeholder='Descripción' className='p-2 rounded-lg border outline-none' required 
            onChange={handleChange} value={formData.description}></textarea>
            <input type="text" id='adress' placeholder='Dirección' className='p-2 rounded-lg border outline-none' required 
            onChange={handleChange} value={formData.adress} />
        </div>
        <div className='flex flex-col flex-1 gap-2'>
            <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                    <p className='font-semibold text-slate-600'>Precio</p>
                    <input type="number" id='price' className='outline-none p-2 rounded-lg border' required min='0' 
                    onChange={handleChange} value={formData.price} />
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='font-semibold text-slate-600'>Porcentaje compartido</p>
                    <input type="number" id='percentage' className='outline-none p-2 rounded-lg border max-w-20' required min='0' onChange={handleChange} value={formData.percentage} />
                </div>
            </div>
            <div>
                <p className='font-semibold'>Fotos: <span className='font-normal text-slate-600'>selecciona un máximo de 10 fotos.</span></p>
                <div className='flex gap-2'>
                    <input type="file" id='imageURLS' accept='image/*' multiple className='border p-3 rounded-lg w-full' />
                    <button className='border border-green-700 text-green-700 font-semibold p-3 rounded-lg'>Subir fotos</button>
                </div>
            </div>
            <button className='bg-teal-900 text-slate-100 font-semibold p-2 rounded-lg text-center hover:opacity-90'>Publicar Inmueble</button>
        </div>
      </form>
    </main>
  )
}
