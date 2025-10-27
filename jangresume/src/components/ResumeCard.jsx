import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const ResumeCard = () => {
    const [position, setPosition] = useState({x:0, y:0});
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top});
    }

    return (
        <div className='relative overflow-hidden max-w-lg my-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-100' onMouseEnter={() => setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove} >
        
            <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-green-500 via-emerald-500 to-lime-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top: position.y - 150, left: position.x - 150}} />

            <div className="text-gray-700 flex flex-col gap-4 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[15px] bg-white z-10 relative backdrop-blur-lg transition-all">

                <h3 className="font-bold text-lg text-gray-800">service.title</h3>
                <p className="text-sm text-gray-700">service.description</p>
                <div className="">
                    <Link to='/' className='text-sm bg-blue-900 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Edit</Link>
                    <Link to='/' className='text-sm bg-slate-700 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Pratinjau</Link>
                    <Link to='/' className='text-sm bg-[#71C9CE] text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Download</Link>
                    <Link to='/' className='text-sm bg-red-700 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Hapus</Link>
                </div>

            </div>
        
        </div>
  )
}

export default ResumeCard
