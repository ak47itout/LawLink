const express = require('express');
const port = 5001;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Connection successful' });
});

app.listen(port, () => console.log('listening on port ' + port));
