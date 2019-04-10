import bodyParser from 'body-parser';
import express from 'express';
import router from './route/router';
import config from './lib/config';

// Start express
const app = express();

// Set middlewares
app.use(
  bodyParser.json(),
  router,
);

// Establish http server connection
app.listen(config.port, () => { console.log(`App running on port ${config.port}`); });
