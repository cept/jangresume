import React from 'react'
import { useReactToPrint } from 'react-to-print'

const PrintButton = ({ resume, componentRef }) => {
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: resume.personalInfo.nama_lengkap
            ? `${resume.personalInfo.nama_lengkap} - CV`
            : 'resume',
        onPrintError: (error) => console.error("Print error:", error),
        pageStyle: `
            @page {
                size: A4;
                margin: 0;
            }

            @media print {
                html, body {
                    margin: 0 !important;
                    padding: 0 !important;
                    background: white !important;
                }

                #resume-to-print {
                    box-shadow: none !important;
                    border: none !important;
                    margin: 0 auto !important;
                    width: 210mm;
                    min-height: 297mm;
                    padding: 15mm;
                }

                .print\\:hidden {
                    display: none !important;
                }
            }
        `
    });

    return (
        <button
            onClick={handlePrint}
            className='bg-primary text-white px-6 py-2 cursor-pointer rounded-lg shadow font-medium hover:bg-primary/30 hover:scale-105 transition-all'
        >
            Download PDF
        </button>
    )
}

export default PrintButton
