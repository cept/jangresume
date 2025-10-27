import React from 'react'
import TemplateCard from '../components/TemplateCard'

const Templates = () => {
  return (
    <div className='flex flex-col items-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 text-gray-700 dark:text-white bg-emerald-50'>
        <h2 className="text-3xl sm:text-5xl font-medium">Galeri Template Pilihan</h2>      
        <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>Awali karier impian anda dengan template modern. Tersedia pilihan template gratis yang siap pakai.</p>
        <TemplateCard work={1} />
    </div>
  )
}

export default Templates
