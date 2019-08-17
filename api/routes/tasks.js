const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

let db = {};
let sequence = 0;

//POST
router.post('/', checkAuth,(request, response) => {
    //Criamos uma new Task
    const newTask = {
        id: ++sequence,
        done: request.body.done || false,
        description: request.body.description
    };
    //acrescenta no banco em memória
    db[newTask.id] = newTask;
    //Devolve o newTask criado
    response.status(201).json(newTask);
}); 

//get all
router.get('/', (request, response) => {
    //response.status(200).json({
    //  message: 'Tasks has been fetched'
    //});
    
    //convert para array
    const toArray = key => db[key];
    const tasks = Object.keys(db).map(toArray);
    
    //Se tem tasks, retorna. Se não, 204
    tasks.length
        ? response.json(tasks)
        : response.status(204).end();
}); 

//get
router.get('/:taskId', (request, response) => {
    const task = db[request.params.taskId];
    task
      ? response.json(task)
      : notFound(request, response)
});

//Edit
//Altero somente o que eu quero
router.patch('/:taskId', checkAuth, (request, response) => {
    const task = db[request.params.taskId];
    const hasValue = request.body.done != null
    if (task) {
      task.done = hasValue ? request.body.done : task.done;
      task.description = request.body.description || task.description;
      response.json(task);
    } else {
      notFound(request, response);
    }
});
   

router.delete('/:taskId', checkAuth, (request, response) => {
    const task = db[request.params.taskId];
    if(task) {
      delete db[task.id];
      response.status(200).end();
    } else {
      notFound(request, response);
    }
});
   
module.exports = router;
