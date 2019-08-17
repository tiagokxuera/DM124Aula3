const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth,(request, response) => {
    //Criamos uma new Task
    const newTask = {
        id: Date.now(),
        done: request.body.done || false,
        description: request.body.description
    }
    response.status(201).json({
        message: 'The task has been created',
        newTask
    });
});

router.get('/', (request, response) => {
    response.status(200).json({
      message: 'Tasks has been fetched'
    });
});

router.get('/:taskId', (request, response) => {
    const id = request.params.taskId;
    response.status(200).json({
      message: `Task with ID = ${id} was fetched`
    });
});      

router.patch('/:taskId', checkAuth, (request, response) => {
    const id = request.params.taskId;
    response.status(200).json({
      message: `Task with ID = ${id} was patched`
    });
}); 

router.delete('/:taskId', checkAuth,(request, response) => {
    const id = request.params.taskId;
    response.status(200).json({
      message: `Task with ID = ${id} has been deleted`
    });
});  

module.exports = router;
