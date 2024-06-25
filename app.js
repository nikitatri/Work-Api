const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(bodyParser.json());
app.use(auth);

app.use('/worko/user', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
