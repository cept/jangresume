import React, { useState } from 'react'
import assets from '../assets/assets'
import Modal from './Modal';
// import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const TemplateCard = ({ work }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeName, setResumeName] = useState('');
  // const navigate = useNavigate();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div key='' className="hover:scale-105 duration-500 transition-all flex flex-col">
            <img src={assets.work_dashboard_management} alt="" className="w-full rounded-xl" />
            <h3 className='mt-3 mb-3 text-lg font-semibold'>Template ATS Professional</h3>
            <button onClick={handleOpenModal} className='text-sm bg-primary text-secondary px-6 py-2 rounded-lg cursor-pointer self-end hover:bg-cyan-400 transition-all'>Buat Sekarang</button>
        </div>
    </div>

    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title={`Buat Resume dari ${work.title}`}
    >
      <form>
        <FormInput 
          label="Nama Resume"
          id="resume-name"
          type="text"
          placeholder="Front End Web"
          value={resumeName}
          onChange={(e) => setResumeName(e.target.value)}
        />
      </form>
      
    </Modal>
    </>
  )
}

export default TemplateCard
