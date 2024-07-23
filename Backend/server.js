const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');
const cors = require('cors');
 


dotenv.config();

connectDB();

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
require('./geminiApi')
 
 

app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
