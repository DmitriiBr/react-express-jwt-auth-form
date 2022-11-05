import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './router/authRouter';

const app: express.Application = express();

const PORT = 8080;

app.use(bodyParser.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({
    info: 'NodeJS',
    framework: 'Express',
  });
});

app.listen(PORT, () => {
  console.log('Server is running on: ' + `//localhost:${PORT}`);
});
