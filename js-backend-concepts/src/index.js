const { response } = require('express');
const express = require('express');
const { uuid } = require('uuidv4')

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {

    // const {title, owner} = request.query;
    // console.log(title, owner);

    return response.json(projects);
});

app.post('/projects', (request, response) => {

    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };
    projects.push(project);

    return response.json(project);
});
app.put('/projects/:id', (request, response) => {

    const { id } = request.params;

    const project = projects.find(project => project.id === id);

    return 0
});
app.delete('/projects/:id', (request, response) => {
    return response.json({
        message1: 'Hello asd!!',
        message2: 'Hello asd!!',
        message3: 'Hello asd!!',
        message5: 'Hello asd!!',
    });
});

app.listen(3333, () => {
    console.log('back-end started');
});