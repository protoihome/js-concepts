const { response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {

    const {title, owner} = request.query;
    console.log(title, owner);

    return response.json({message: 'Hello asd!!'});
});
app.post('/projects', (request, response) => {
    return response.json({
        message1: 'Hello asd!!',
        message2: 'Hello asd!!',
        message3: 'Hello asd!!',
    });
});
app.put('/projects/:id', (request, response) => {
    return response.json({
        message1: 'Hello asd!!',
        message2: 'Hello asd!!',
        message3: 'Hello asd!!',
        message4: 'Hello asd!!',
    });
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