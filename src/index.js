import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({ size: req.file.buffer.byteLength });
});

const port = process.env.PORT || 8080;

app.listen(port);
