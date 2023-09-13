const express = require('express');
const config = require('./config/knexfile');

const ApiRouter = require('./src/routes');

const routes = new ApiRouter(config.development);

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes.getRouter());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
