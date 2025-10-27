import React from 'react'

const Modal = ({ isOpen, onClose, title, children, onSave }) => {
    function CloseIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        );
    }

    if(!isOpen) return null;

  return (
    <div
        onClick={onClose}
        className='fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm'
        aria-modal="true"
        role='dialog'
    >
        <div 
            onClick={(e) => e.stopPropagation()}
            className='relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl transition-all duration-300 transform scale-95 opacity-0 animate-modal-pop-in'
        >
            <div className='flex items-center justify-between p-6 border-b '>
                <h3 className='text-xl font-semibold text-gray-900' id='modal-title'>
                    {title || 'Judul Modal'}
                </h3>
                <button
                    onClick={onClose}
                    className='p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors'
                    aria-label='Tutup modal'
                >
                    <CloseIcon />
                </button>
            </div>

            <div className='p-6 text-gray-600'>
                {children}
            </div>
            
            <div className='flex items-center justify-end p-6 space-x-4 bg-gray-50 border-t'>
                <button
                    onClick={onClose}
                    className='px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors'
                >
                    Batal
                </button>
                <button
                    onClick={onSave}
                    className='px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 transition-opacity'
                >
                    Simpan
                </button>

            </div>
        </div>
      
    </div>
  )
}

export default Modal
