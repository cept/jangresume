import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SectionTitle = ({ title }) => (
  <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mt-6 mb-4">
    {title.toUpperCase()}
  </h2>
);

const ResumePreview = () => {
    const { slug } = useParams(); 
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const numericId = slug ? slug.split('-')[1] : null;

    useEffect(() => {
        if (!numericId) {
        setError('ID Resume tidak valid.');
        setLoading(false);
        return;
        }

        const fetchResumeData = async () => {
        try {
            setLoading(true);
            
            const response = await axios.get(`/api/dashboard/${numericId}`);
            
            
            setResume(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gagal memuat data.");
        } finally {
            setLoading(false);
        }
        };

        fetchResumeData();
    }, [numericId]); 

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Memuat Pratinjau...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    if (!resume) {
        return <div className="flex justify-center items-center h-screen">Data resume tidak ditemukan.</div>;
    }

    const { personalInfo, experiences, educations, skills } = resume;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-md border">
        
        {/* --- HEADER --- */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">{personalInfo.nama_lengkap}</h1>
          <h2 className="text-2xl font-medium mt-1">{personalInfo.headline}</h2>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm text-gray-600">
            <span>{personalInfo.email}</span>
            <span>|</span>
            <span>{personalInfo.no_hp}</span>
            <span>|</span>
            <span>{personalInfo.alamat}</span>
          </div>
        </header>

        {/* --- RINGKASAN --- */}
        <section>
          <SectionTitle title="Ringkasan Profesional" />
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </section>

        {/* --- PENGALAMAN KERJA --- */}
        <section>
          <SectionTitle title="Pengalaman Kerja" />
          <div className="space-y-6">
            {experiences.map(exp => (
              <div key={exp.id}>
                <p className="text-sm text-gray-500 float-right">{exp.startDate} - {exp.endDate}</p>
                <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-md font-medium text-gray-800">{exp.company}</p>
                <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PENDIDIKAN --- */}
        <section>
          <SectionTitle title="Pendidikan" />
          <div className="space-y-4">
            {educations.map(edu => (
              <div key={edu.id}>
                <p className="text-sm text-gray-500 float-right">{edu.startDate} - {edu.endDate}</p>
                <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                <p className="text-md font-medium text-gray-800">{edu.degree} - {edu.fieldOfStudy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- KETERAMPILAN --- */}
        <section>
          <SectionTitle title="Keterampilan" />
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default ResumePreview
