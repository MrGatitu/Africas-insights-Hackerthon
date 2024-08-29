require('dotenv').config({ path: './BackEnd/config/.env' });//fixed
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/check-sim-swap', async (req, res) => {
    const { username, phoneNumbers } = req.body;

    if (!username || !phoneNumbers) {
        return res.status(400).json({ error: 'Username and phoneNumbers are required' });
    }

    try {
        const response = await axios.post('https://insights.sandbox.africastalking.com/v1/sim-swap', {
            username: username,
            phoneNumbers: phoneNumbers,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apiKey': process.env.API_KEY
            }
        });

        res.status(200).json(response.data);

    } catch (error) {
        console.error('Error making API request:', error.message);
        res.status(500).json({ error: 'Failed to check SIM swap status' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
