//server
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const api = require('./api');
const db = require('./queries')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/',api);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
app.get('/envelope', db.getEnvelopes);
app.get('/envelope/:id', db.getEnvelopeById);
app.post('/envelope', db.createEnvelope);
app.put('/envelope/:id', db.updateEnvelope);
app.delete('/envelope/:id', db.deleteEnvelope);
app.get('/transactions', db.getTransactions);
app.get('/transactions/:id', db.getTransactionById);
app.post('/transactions', db.createTransaction);
app.put('/transactions/:id', db.updateTransaction);
app.delete('/transactions/:id', db.deleteTransaction);
app.get('/user_transaction', db.getUserTransactions);
app.get('/user_transactions/:id', db.getUserTransactionById);



app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
  });