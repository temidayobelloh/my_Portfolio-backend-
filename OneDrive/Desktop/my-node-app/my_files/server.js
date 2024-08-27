const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'https://temidayobelloh.github.io/my_Portfolio/' }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myPortfolioDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define the schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
    res.send('I am Temidayo Bello');
});

app.post('/submit', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({
        name,
        email,
        subject,
        message
    });

    try {
        await newContact.save();
        res.status(200).json({ status: 'success', data: { name, email, subject, message } });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Failed to save data.' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
