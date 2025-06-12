const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/portfolioCMS')
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.log(err));
app.use('/api/blogs', blogRoutes); // <--- Mount blog APIs

app.listen(5000, () => console.log('Server started on port 5000 🚀'));
