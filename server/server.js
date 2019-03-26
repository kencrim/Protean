import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from '../src/components/App';

const app = express();

app.set('view engine', 'pug');

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  const html = renderToString(
    <App />
  );
  res.render(path.join(__dirname, '..', 'src/index.pug'), {
    app: html
  });
});

app.listen(3000, () => console.log('listening on port 3000'));