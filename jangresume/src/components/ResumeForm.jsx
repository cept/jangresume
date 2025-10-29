import React from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'

const ResumeForm = ({
    state, 
    handlePersonalChange, 
    handleExperienceChange, 
    handleEducationChange, 
    handleAddSkill,
    currentSkill,
    setCurrentSkill,
    dispatch
}) => {

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <FormInput 
          label="Nama Lengkap"
          id="nama_lengkap"
          name="nama_lengkap" 
          type="text"
          placeholder="John Doe"
          value={state.personalInfo.nama_lengkap} 
          onChange={handlePersonalChange} 
        />
        <FormInput 
          label="Email"
          id="email"
          name="email" 
          type="email"
          placeholder="johndoe@gmail.com"
          value={state.personalInfo.email} 
          onChange={handlePersonalChange} 
        />
        <FormInput 
          label="No Handphone"
          id="no_hp"
          name="no_hp" 
          type="text"
          placeholder="628123456789"
          value={state.personalInfo.no_hp} 
          onChange={handlePersonalChange} 
        />
        <FormInput 
          label="CV Headline"
          id="headline"
          name="headline" 
          type="text"
          placeholder="Web Developer"
          value={state.personalInfo.headline} 
          onChange={handlePersonalChange} 
        />
        <FormInput 
          label="Alamat"
          id="alamat"
          name="alamat" 
          type="text"
          placeholder="JL. Babakan Sawah"
          value={state.personalInfo.alamat} 
          onChange={handlePersonalChange} 
        />
        <FormTextarea 
          label="Ringkasan"
          id="summary"
          name="summary" 
          type="text"
          placeholder="saya fresh graduates dengan semangat tinggi dibidang IT... "
          value={state.personalInfo.summary} 
          onChange={handlePersonalChange} 
        />

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="block text-sm font-medium text-gray-700 mb-1">Pendidikan</h3>
          
          {state.educations.map((edu, index) => (
            <div key={edu.id} className="p-4 border rounded-lg mb-4 relative bg-gray-50 dark:bg-gray-800">
              <button 
                type="button" 
                onClick={() => dispatch({ type: 'DELETE_EDUCATION', id: edu.id })}
                className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-2xl font-bold"
                aria-label="Hapus pendidikan"
              >
                &times;
              </button>
              
              <FormInput 
                label={`Institusi #${index + 1}`}
                id={`school-${edu.id}`}
                name="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(edu.id, e)}
                placeholder="Nama Sekolah/Universitas"
              />
              <FormInput 
                label="Gelar"
                id={`degree-${edu.id}`}
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(edu.id, e)}
                placeholder="cth: S1, D3, SMK"
              />
              <FormInput 
                label="Bidang Studi"
                id={`fieldOfStudy-${edu.id}`}
                name="fieldOfStudy"
                value={edu.fieldOfStudy}
                onChange={(e) => handleEducationChange(edu.id, e)}
                placeholder="cth: Teknik Informatika"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput 
                  label="Tanggal Mulai"
                  id={`edu-startDate-${edu.id}`}
                  name="startDate"
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                  placeholder="cth: Jan 2018"
                />
                <FormInput 
                  label="Tanggal Selesai"
                  id={`edu-endDate-${edu.id}`}
                  name="endDate"
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(edu.id, e)}
                  placeholder="cth: Des 2021"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => dispatch({ type: 'ADD_EDUCATION' })}
            className="mt-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            + Tambah Pendidikan
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="block text-sm font-medium text-gray-700 mb-1">Pengalaman Kerja</h3>
          
          {/* Loop/Map semua data pengalaman */}
          {state.experiences.map((exp, index) => (
            <div key={exp.id} className="p-4 border rounded-lg mb-4 relative bg-gray-50 dark:bg-gray-800">
              {/* Tombol Hapus per item */}
              <button 
                type="button" 
                onClick={() => dispatch({ type: 'DELETE_EXPERIENCE', id: exp.id })}
                className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-2xl font-bold"
                aria-label="Hapus pengalaman"
              >
                &times;
              </button>
              
              <FormInput 
                label={`Perusahaan #${index + 1}`}
                id={`company-${exp.id}`}
                name="company" // 'name' harus cocok dengan field di state
                value={exp.company}
                onChange={(e) => handleExperienceChange(exp.id, e)} // Kirim ID
                placeholder="Nama Perusahaan"
              />
              <FormInput 
                label="Posisi"
                id={`role-${exp.id}`}
                name="role"
                value={exp.role}
                onChange={(e) => handleExperienceChange(exp.id, e)}
                placeholder="Posisi (cth: Web Developer)"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInput 
                  label="Tanggal Mulai"
                  id={`exp-startDate-${exp.id}`}
                  name="startDate"
                  type="text" // Bisa juga 'month' atau 'date'
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  placeholder="cth: Jan 2020"
                />
                <FormInput 
                  label="Tanggal Selesai"
                  id={`exp-endDate-${exp.id}`}
                  name="endDate"
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  placeholder="cth: Des 2022 / Sekarang"
                />
              </div>
              <FormTextarea
                  label="Deskripsi (Opsional)"
                  id={`exp-description-${exp.id}`}
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  placeholder="Deskripsikan pekerjaan Anda..."
              />
            </div>
          ))}

          {/* Tombol untuk menambah item pengalaman baru */}
          <button
            type="button"
            onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })}
            className="mt-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            + Tambah Pengalaman
          </button>
        </div>

        {/* --- Bagian Skills (BARU & DINAMIS) --- */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Contoh: Javascript"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              // Styling agar mirip FormInput
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 transition-opacity"
            >
              Tambah
            </button>
          </div>
          
          {/* Daftar skills yang sudah ditambah (sebagai 'tags') */}
          <div className="flex flex-wrap gap-2 mt-3">
            {state.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-1.5 bg-gray-200 text-sm rounded-full px-3 py-1">
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'DELETE_SKILL', index: index })}
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 text-lg leading-none"
                  aria-label={`Hapus ${skill}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* {submitError && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <strong>Gagal menyimpan:</strong> {submitError}
          </div>
        )} */}
    </form>
  )
}

export default ResumeForm
