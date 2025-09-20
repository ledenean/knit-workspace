const connect = require('./connect');
const express = require('express');
const cors = require('cors');
const projects = require('./projectRoutes');
const patterns = require('./patternRoutes');
const awsRoutes = require('./awsRoutes');
const multer = require("multer");
const upload = multer();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(upload.any());
app.use(projects);
app.use('/patterns', patterns);
app.use(awsRoutes);

app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`);
});