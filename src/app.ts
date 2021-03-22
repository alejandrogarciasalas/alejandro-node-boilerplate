import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
