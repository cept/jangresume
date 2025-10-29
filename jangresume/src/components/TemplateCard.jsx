import React, { useState } from 'react'
import assets from '../assets/assets'
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useResumeForm from './useResumeForm';
import ResumeForm from './ResumeForm';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';


const TemplateCard = ({ work }) => {
  const { 
    state, 
    dispatch, 
    currentSkill, 
    setCurrentSkill,
    ...handlers 
  } = useResumeForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch({ type: 'RESET_FORM' }); 
    setSubmitError(null); 
    setIsSubmitting(false);
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/dashboard', 
        state 
      );
      const newId = response.data.newId;
      if (!newId) {
        throw new Error("Respons dari server tidak valid (newId tidak ditemukan).");
      }

      // console.log("Data berhasil dikirim, ID baru dari DB:", newId);
      
      handleCloseModal(); 
      
      navigate(`/dashboard`); 

    } catch (err) {
      console.error("Error saat mengirim data:", err);
      setSubmitError(err.response?.data?.message || err.message || "Terjadi kesalahan");
    } finally {
      setIsSubmitting(false);  
    }
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
      onSave={handleSave}
      title={`Buat Resume dari ${work.title}`}
      isSaving={isSubmitting}
    >
      <ResumeForm 
        state={state}
        dispatch={dispatch}
        currentSkill={currentSkill}
        setCurrentSkill={setCurrentSkill}
        {...handlers}
      />
      {submitError && (
        <div className="mt-4 text-red-600">Error: {submitError}</div>
      )}
    </Modal>
    </>
  )
}

export default TemplateCard
