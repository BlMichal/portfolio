import React from 'react'
import Form from '../_components/Form'

const UploadAdvertisementImages = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-4'>
      <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
      <p className='my-2'><span className='text-purple-700 font-bold'>1 krok: </span>vyplňte údaje o produktu</p>
      <Form/>

    </section>
  )
}

export default UploadAdvertisementImages