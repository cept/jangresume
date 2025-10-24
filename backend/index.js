require('dotenv').config();
const express = require('express');
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');

// const siswaRoutes = require('./src/routes/siswaRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) =>
    res.json({status: 'OK', app: 'Jangresume' }));
// app.use('/api', siswaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
