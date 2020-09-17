const express = require('express');
const app = express();
const Email = require('./models/emails');

app.use(express.json());

app.post('/api/v1/emails', async(req, res, next) => {
  try {
    const createdEmail = await Email.insert(req.body);
    res.send(createdEmail);
  } catch(error) {
    next(error);
  }
});

app.delete('/api/v1/emails/:id', async(req, res, next) => {
  try {
    const deletedEmail = await Email.delete(req.params.id);
    res.send(deletedEmail);
  } catch(error) {
    next(error);
  }
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
