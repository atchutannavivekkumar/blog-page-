const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

const initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html")); // Fix: Avoid duplicating 'public' in the path
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
