const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost',  // Allow only your frontend's URL
  methods: ['GET', 'POST'],  // Limit to specific methods if needed
};

app.use(cors(corsOptions));

app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello, World test!' });
});

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
