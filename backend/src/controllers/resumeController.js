const resume = require('../models/resumeModel');

exports.getList = async (req, res) => {
    try {
        const data = await resume.list();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { personalInfo, experiences, educations, skills } = req.body;
        const payload = {
            // id: personalInfo.id,
            nama_lengkap: personalInfo.nama_lengkap,
            email: personalInfo.email,
            no_hp: personalInfo.no_hp,
            headline: personalInfo.headline,
            alamat: personalInfo.alamat,
            summary: personalInfo.summary,
            experience: JSON.stringify(experiences),
            education: JSON.stringify(educations),
            skills: JSON.stringify(skills)
        };

        const info = await resume.insert(payload);
        res.status(201).json({ message: 'Berhasil menambahkan', newId: info.insertId});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    
    const resumeData = await resume.getOne(id); 
    
    res.status(200).json(resumeData);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { personalInfo, experiences, educations, skills } = req.body;
        const payload = {
            nama_lengkap: personalInfo.nama_lengkap,
            email: personalInfo.email,
            no_hp: personalInfo.no_hp,
            headline: personalInfo.headline,
            alamat: personalInfo.alamat,
            summary: personalInfo.summary,
            experience: JSON.stringify(experiences || []),
            education: JSON.stringify(educations || []),
            skills: JSON.stringify(skills || [])           
        };

        const info = await resume.update(id, payload);
        if (info.affectedRows === 0) {
            return res.status(404).json({ message: 'Data resume tidak ditemukan' });
        }
        res.status(200).json({ message: 'Berhasil memperbarui' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.destroy = async (req, res) => {
    try {
        const {id} = req.params;
        const info = await resume.destroy(id);
        if (info.affectedRows === 0) {
            return res.status(404).json({ message: 'Data resume tidak ditemukan' });
        }
        res.status(200).json({ message: 'Berhasil Menghapus' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

