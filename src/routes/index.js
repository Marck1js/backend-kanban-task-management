const {Router} = require('express');
const routes = Router();
const getAllBoards = require('../controllers/get/AllBoards');

const {models} = require('../db');
const amountBoards = require('../controllers/get/amountBoards');
const addNewTask = require('../controllers/post/addNewTask');
const addBoard = require('../controllers/post/addBoard');
const boardById = require('../controllers/get/boardById');
const subtaskCompleted = require('../controllers/put/subtaskCompleted');

let {task,subtask,column,board} = models;

function visualizer (req,res,next){
    console.log('-------------------------------------')
    console.log('Access Granted')
    console.log('-------------------------------------')
    next()
}

// GET
// Todo los boards y su info
routes.get('/', visualizer, getAllBoards);
// La cantidad de Boards
routes.get('/all', visualizer, amountBoards)
// Un board (id) con su info
routes.get('/:id', visualizer, boardById);

// POST
routes.post('/add/task', visualizer,addNewTask);
routes.post('/add/board', visualizer ,addBoard);

// PUT
routes.put('/complete', visualizer, subtaskCompleted);




module.exports = {
    routes
}
