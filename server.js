const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
