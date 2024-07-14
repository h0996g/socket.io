const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.get('/api/chat', (req, res) => {
    res.send(chats);
}
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
}
);