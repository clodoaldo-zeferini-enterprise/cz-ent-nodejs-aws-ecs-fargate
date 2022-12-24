const express = require('express');

const axios = require('axios');

const app = express();

const port = 3000;

/*endpoints*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/healthcheck', (req, res) => {
    try {
      res.sendStatus(204);
    } catch (error) {
      res.sendStatus(500);
    }
  });

app.get('/cats', async (req, res) => {
  try {
    const response = await axios.get('https://aws.random.cat/meow');

    console.log(JSON.stringify(response.data));

    const { file: catImage } = response.data;
    res.send(
      `<img src='${catImage}' alt='random cat' style='max-width: 500px' />`
    );
  } catch (error) {
    console.error(JSON.stringify(error));
    res.status(500);
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(
    `cz-ent-nodejs-aws-ecs-fargate listening at http://localhost:${port}`
  );
});
