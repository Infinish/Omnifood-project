const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3000;

const htmlPath = path.join(__dirname, '../public');

app.use(express.static(htmlPath));

server.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
