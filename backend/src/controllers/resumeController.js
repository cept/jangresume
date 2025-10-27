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
        const body = req.body;
        const payload = {
            id: body.id,
            nama_lengkap: body.nama_lengkap,
            email: body.email,
            no_hp: body.no_hp,
            headline: body.headline,
            alamat: body.alamat,
            summary: body.summary,
            experience: body.experience,
            education: body.education,
            skills: body.skills
        };

        const info = await resume.insert(payload);
        res.status(201).json({ message: 'Berhasil menambahkan', ...info });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const payload = {
            nama_lengkap: body.nama_lengkap,
            email: body.email,
            no_hp: body.no_hp,
            headline: body.headline,
            alamat: body.alamat,
            summary: body.summary,
            experience: body.experience,
            education: body.education,
            skills: body.skills           
        };

        const info = await resume.update(id, payload);
        res.json({ message: 'Berhasil memperbarui', ...info });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.destroy = async (req, res) => {
    try {
        const {id} = req.params;
        const info = await resume.destroy(id);
        res.json({ message: 'Berhasil Menghapus', ...info });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

