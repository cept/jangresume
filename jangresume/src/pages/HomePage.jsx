import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets';

const TemplateIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>
);
const EditIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
);
const DownloadIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const HomePage = () => {
  return (
    <div className="text-gray-900 dark:text-white dark:bg-gray-900">
      
      <section className="container mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Buat Resume Profesional Anda <span className="text-primary">dalam Hitungan Menit</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              Selamat datang di <span className="font-semibold">JangResume</span>. 
              Pilih template modern, isi data Anda, dan download PDF berkualitas tinggi. Cepat, gratis, dan teruji ATS.
            </p>
            <div className="mt-10">
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Mulai Buat (Gratis)
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={assets.cv_henhen} alt="Contoh Resume Profesional" className="rounded-lg shadow-2xl" />

          </div>

        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kenapa Memilih JangResume?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Kami fokus pada apa yang paling penting untuk membantu Anda mendapatkan pekerjaan impian.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <TemplateIcon />
              <h3 className="text-2xl font-semibold mt-4 mb-2">Template ATS-Friendly</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Desain kami tidak hanya modern, tapi juga teruji lolos *Applicant Tracking System* (ATS) yang digunakan banyak perusahaan.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <EditIcon />
              <h3 className="text-2xl font-semibold mt-4 mb-2">Editor Intuitif</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Isi data diri, pengalaman, dan skill Anda dengan mudah. Ganti template kapan saja tanpa perlu mengetik ulang.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <DownloadIcon />
              <h3 className="text-2xl font-semibold mt-4 mb-2">Download PDF Gratis</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tidak ada biaya tersembunyi. Download resume Anda dalam format PDF berkualitas tinggi sebanyak yang Anda mau.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Hanya 3 Langkah Mudah
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between gap-10 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700 -translate-y-1/2 -z-10" />

            <div className="flex flex-col items-center max-w-xs mx-auto z-10">
              <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">1</div>
              <h3 className="text-2xl font-semibold mt-10 mb-2">Pilih Template</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pilih satu dari puluhan desain profesional yang paling mewakili diri Anda.
              </p>
            </div>
            
            <div className="flex flex-col items-center max-w-xs mx-auto z-10">
              <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">2</div>
              <h3 className="text-2xl font-semibold mt-10 mb-2">Isi Data Diri</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gunakan form editor kami yang mudah untuk mengisi informasi pribadi, pengalaman, dan skill.
              </p>
            </div>

            <div className="flex flex-col items-center max-w-xs mx-auto z-10">
              <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">3</div>
              <h3 className="text-2xl font-semibold mt-10 mb-2">Download & Lamar</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Unduh resume Anda sebagai PDF dan mulailah melamar pekerjaan impian Anda!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siap Membuat Perbedaan?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Jangan biarkan resume yang buruk menghalangi karier Anda. Mulai bangun resume profesional Anda hari ini.
          </p>
          <Link
            to="/templates" 
            className="px-10 py-4 bg-white text-primary text-lg font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Pilih Template Sekarang
          </Link>
        </div>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-950 py-10">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} JangResume. Dibuat dengan ❤️ untuk para pencari kerja.</p>
        </div>
      </footer>

    </div>
  )
}

export default HomePage
