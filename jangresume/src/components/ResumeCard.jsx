import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useResumeForm from './useResumeForm';
import ResumeForm from './ResumeForm';
import Modal from './Modal';
import axios from 'axios';

const ResumeCard = ({ service }) => {
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
    const [isLoadingData, setIsLoadingData] = useState(false);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    const [position, setPosition] = useState({x:0, y:0});
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top});
    }

    const handleOpenModal = async () => {
        setIsLoadingData(true);
        setSubmitError(null);
        try {
        const response = await axios.get(`/api/dashboard/${service.id}`);
        dispatch({ type: 'SET_FORM_DATA', payload: response.data });
        setIsModalOpen(true);
        } catch (err) {
        setSubmitError(err.response?.data?.message || "Gagal memuat data.");
        }
        setIsLoadingData(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch({ type: 'RESET_FORM' }); 
        setSubmitError(null); 
        setIsSubmitting(false);
    };

    const handleUpdate = async () => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
        await axios.put(`/api/dashboard/${service.id}`, state);

        sessionStorage.setItem('app-alert', JSON.stringify({ type: 'success', message: 'Resume berhasil diupdate!' }));

        handleCloseModal();
        window.location.reload(); // Refresh halaman untuk melihat perubahan
        } catch (err) {
        setSubmitError(err.response?.data?.message || err.message);
        } finally {
        setIsSubmitting(false); 
        }
    };

    const handleOpenDeleteModal = () => {
        setDeleteError(null); // Bersihkan error lama
        setIsDeleteModalOpen(true); // Buka modal konfirmasi
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteError(null);
    };

    const handleDeleteConfirm = async () => {
        setIsDeleting(true);
        setDeleteError(null);
        try {
        // Panggil API DELETE
        await axios.delete(`/api/dashboard/${service.id}`);
        
        sessionStorage.setItem('app-alert', JSON.stringify({ type: 'success', message: 'Resume berhasil dihapus!' }));
        
        setIsDeleteModalOpen(false);
        window.location.reload(); // Refresh halaman untuk melihat perubahan
        
        } catch (err) {
        setDeleteError(err.response?.data?.message || "Gagal menghapus data.");
        } finally {
        setIsDeleting(false); 
        }
    };

    if (!service) {
        return null; 
    }

    return (
        <div className='relative overflow-hidden max-w-lg my-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-100' onMouseEnter={() => setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove} >
        
            <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-green-500 via-emerald-500 to-lime-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top: position.y - 150, left: position.x - 150}} ></div>

            <div className="text-gray-700 flex flex-col gap-4 p-8 hover:p-7.5 hover:m-0.5 rounded-[15px] bg-white z-10 relative backdrop-blur-lg transition-all">

                <h3 className="font-bold text-lg text-gray-800">{service.headline}</h3>
                <p className="text-sm text-gray-700">{service.nama_lengkap}</p>
                <div className="">
                    <button onClick={handleOpenModal} disabled={isLoadingData} className='text-sm bg-blue-900 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Edit</button>
                    <Link to={`/dashboard/cv-${service.id}`} className='text-sm bg-slate-700 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all' target='_blank'>Pratinjau</Link>
                    <button onClick={handleOpenDeleteModal} className='text-sm bg-red-700 text-secondary mr-2 px-6 py-2 rounded-md cursor-pointer inline-block hover:scale-105 transition-all'>Hapus</button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleUpdate}
                title={`Edit Resume: ${state.personalInfo.nama_lengkap}`}
                isSaving={isSubmitting}
                saveButtonText="Simpan Perubahan"
                loadingText="Menyimpan..."
                variant="primary"
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

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onSave={handleDeleteConfirm}
                title="Konfirmasi Hapus"
                isSaving={isDeleting}
                saveButtonText="Ya, Hapus"
                loadingText="Menghapus..."
                variant="danger"

            >
                <p className="text-gray-700">
                    Apakah Anda yakin ingin menghapus resume ini ?
                </p>
                <p className="font-semibold mt-2">{service.headline}</p>
                
                {deleteError && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <strong>Gagal menghapus:</strong> {deleteError}
                </div>
                )}
            </Modal>
        
        </div>
  )
}

export default ResumeCard
