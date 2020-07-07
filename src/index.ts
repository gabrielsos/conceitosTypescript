import express from 'express';
import {helloWorld, listUsers} from './routes';

const app = express();

app.post('/users', (request, response) => { helloWorld });
app.get('/users', (request, response) => { listUsers });

app.listen(3333);