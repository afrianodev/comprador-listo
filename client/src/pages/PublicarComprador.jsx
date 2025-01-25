import React from 'react'

export default function PublicarComprador() {
  return (
    <main className='p-6'>
        <h1 className='text-3xl font-bold text-center my-8'>Publicar Comprador</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-2 flex-1'>
            <p className='text-sm text-slate-600'>Datos obligatorios.</p>
            <input type="text" placeholder='Título' id='title' className='p-2 rounded-lg border outline-none' required />
            <textarea id="description" placeholder='Descripción' className='p-2 rounded-lg border outline-none' required></textarea>
            <div className='flex gap-2 items-center'>
                <p className='font-semibold text-slate-600'>Presupuesto</p>
                <input type="number" id='presupuesto-min' placeholder='Mínimo' className='outline-none p-2 rounded-lg border' required min='0' />
                <input type="number" id='presupuesto-max' placeholder='Máximo' className='outline-none p-2 rounded-lg border' required min='0' />
            </div>
            <input type="text" id='ciudad' placeholder='Ciudad' className='p-2 rounded-lg border outline-none' required />
            <input type="text" id='colonias' placeholder='Colonias' className='p-2 rounded-lg border outline-none' required />
            <div className='flex gap-2 items-center'>
                <p className='text-slate-700 font-semibold'>Recursos:</p>
                <select className='p-1' name="" id="">
                    <option value="">Credito Bancario</option>
                    <option value="">Credito INFONAVIT</option>
                    <option value="">Recursos propios</option>
                    <option value="">Recursos mixtos</option>
                    <option value="">Por aprovación</option>
                </select>
                <p className='text-slate-700 font-semibold ml-4'>¿Requiere factura?</p>
                <select className='p-1' name="" id="">
                    <option value="">Si</option>
                    <option value="">No</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col flex-1 gap-2'>
            <p className='text-sm text-slate-600'>Datos opcionales, pero recomendados.</p>
            <div className='flex gap-2 items-center'>
                <p className='font-semibold text-slate-600'>Tipo de propiedad:</p>
                <div className='flex gap-2 ml-4'>
                    <input type="checkbox" placeholder='casa' className='outline-none p-2 rounded-lg border w-4' />
                    <p>Casa</p>
                </div>
                <div className='flex gap-2 ml-4'>
                    <input type="checkbox" placeholder='departamento' className='outline-none p-2 rounded-lg border w-4' />
                    <p>Departamento</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='font-semibold text-slate-600'>Metros cuadrados:</p>
                <input type="number" placeholder='Mínimos' className='outline-none p-2 rounded-lg border' />
            </div>
            <div className='flex gap-6'>
                <div className='flex gap-2'>
                    <p className='font-semibold text-slate-600'>Habitaciones:</p>
                    <select name="" id="">
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <p className='font-semibold text-slate-600'>Bañoss:</p>
                    <select name="" id="">
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <p className='font-semibold text-slate-600'>Estacionamiento:</p>
                    <select name="" id="">
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-2'>
                <p className='font-semibold text-slate-600'>Tipo de cocina:</p>
                <select name="" id="" className='p-1'>
                    <option value="">Integral</option>
                    <option value="">Grande</option>
                    <option value="">Pequeña</option>
                    <option value="">Melamina</option>
                    <option value="">Acabados premium</option>
                </select>
            </div>
            <h2 className='text-slate-700 font-bold'>No negociables</h2>
            <div className='flex flex-wrap gap-4'>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='en-privada' className='w-3 cursor-pointer' />
                    <label htmlFor='en-privada' className='select-none cursor-pointer'>En privada</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='en-calle' className='w-3 cursor-pointer' />
                    <label htmlFor='en-calle' className='select-none cursor-pointer'>En calle</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='jardin' className='w-3 cursor-pointer' />
                    <label htmlFor='jardin' className='select-none cursor-pointer'>Con jardín</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='petfriendly' className='w-3 cursor-pointer' />
                    <label htmlFor='petfriendly' className='select-none cursor-pointer'>Pet friendly</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='roof-top' className='w-3 cursor-pointer' />
                    <label htmlFor='roof-top' className='select-none cursor-pointer'>Roof top</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='alberca' className='w-3 cursor-pointer' />
                    <label htmlFor='alberca' className='select-none cursor-pointer'>Alberca</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='parque-ninos' className='w-3 cursor-pointer' />
                    <label htmlFor='parque-ninos' className='select-none cursor-pointer'>Parque niños</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='dog-park' className='w-3 cursor-pointer' />
                    <label htmlFor='dog-park' className='select-none cursor-pointer'>Dog park</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='casa-club' className='w-3 cursor-pointer' />
                    <label htmlFor='casa-club' className='select-none cursor-pointer'>Casa club</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='gimnasio' className='w-3 cursor-pointer' />
                    <label htmlFor='gimnasio' className='select-none cursor-pointer'>Gimnasio</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='coworking' className='w-3 cursor-pointer' />
                    <label htmlFor='coworking' className='select-none cursor-pointer'>Coworking</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='cancha-tenis' className='w-3 cursor-pointer' />
                    <label htmlFor='cancha-tenis' className='select-none cursor-pointer'>Cancha tennis</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='cancha-fut' className='w-3 cursor-pointer' />
                    <label htmlFor='cancha-fut' className='select-none cursor-pointer'>Cancha futbol</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='cancha-padel' className='w-3 cursor-pointer' />
                    <label htmlFor='cancha-padel' className='select-none cursor-pointer'>Cancha paddel</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" id='zona-asado' className='w-3 cursor-pointer' />
                    <label htmlFor='zona-asado' className='select-none cursor-pointer'>Zona Asado</label>
                </div>
            </div>
           
            <button className='bg-teal-900 text-slate-100 font-semibold p-2 rounded-lg text-center hover:opacity-90'>Publicar Inmueble</button>
        </div>
      </form>      
    </main>
  )
}
