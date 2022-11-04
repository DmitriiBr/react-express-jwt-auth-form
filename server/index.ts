import express from 'express';

const app: express.Application = express();

const PORT = 8080;

app.get('/', (_req, _res) => {
  _res.send('Hello world');
});

app.listen(PORT, () => {
  console.log('Server is running on: ' + `//localhost:${PORT}`);
});
