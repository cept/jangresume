const pool = require('../config/db');

async function list() {
    const [rows] = await pool.query('SELECT id, nama_lengkap, headline FROM resume ORDER BY id DESC');
    return rows;
}

async function insert(data) {
    const sql = 'INSERT INTO resume(nama_lengkap, email, no_hp, headline, alamat, summary, experience, education, skills) VALUES(?,?,?,?,?,?,?,?,?)';
    const params = [
        data.nama_lengkap,
        data.email,
        data.no_hp,
        data.headline,
        data.alamat,
        data.summary,
        data.experience,
        data.education,
        data.skills
    ];

    const [result] = await pool.query(sql, params);
    // const info = result[0];
    return result;
}

async function getOne(id) {
  const [rows] = await pool.query(
    'SELECT * FROM resume WHERE id = ?',
    [id]
  );
  
  if (rows.length === 0) {
    throw new Error(`Resume dengan ID ${id} tidak ditemukan.`);
  }
  
  const resume = rows[0];

  const experienceArray = JSON.parse(resume.experience || '[]');
  const educationArray = JSON.parse(resume.education || '[]');
  const skillsArray = JSON.parse(resume.skills || '[]');
  
  const formattedResume = {
    personalInfo: {
      nama_lengkap: resume.nama_lengkap,
      email: resume.email,
      no_hp: resume.no_hp,
      headline: resume.headline,
      alamat: resume.alamat,
      summary: resume.summary
    },
    experiences: experienceArray,
    educations: educationArray,
    skills: skillsArray
  };

  return formattedResume;
}

async function update(id, data) {
    const sql = `
    UPDATE resume 
    SET 
        nama_lengkap = ?,
        email = ?,
        no_hp = ?,
        headline = ?,
        alamat = ?,
        summary = ?,
        experience = ?,
        education = ?,
        skills = ?
    WHERE
        id = ?
    `;
    
    const params = [
        data.nama_lengkap,
        data.email,
        data.no_hp,
        data.headline,
        data.alamat,
        data.summary,
        data.experience,
        data.education,
        data.skills,
        id
    ];

    const [result] = await pool.query(sql, params);
    // const info = result[0][0];
    return result;
}

async function destroy(id) {
    const sql = `DELETE FROM resume WHERE id = ?`;
    const [result] = await pool.query(sql, [id]);
    return result;
}

module.exports = { list, insert, getOne, update, destroy };