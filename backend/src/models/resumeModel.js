const pool = require('../config/db');

async function list() {
    const [rows] = await pool.query('SELECT id, nama_lengkap, headline FROM resume');
    return rows;
}

async function insert(data) {
    const sql = 'INSERT resume VALUES(?,?,?,?,?,?,?,?,?,?)';
    const params = [
        data.id,
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

module.exports = { list, insert, update, destroy };