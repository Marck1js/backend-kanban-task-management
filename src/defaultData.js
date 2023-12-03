const {server, models} = require('./db')

let {column,task,subtask,board} = models;

async function defaultData () {

 // Boards
    await board.create({
        name: 'Platform Launch'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'Marketing Plan'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'RoadMap'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'Developing Page'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'Ar neuro'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'Developing React Native'
    }).then( (e) => console.log(e.dataValues.name));

    await board.create({
        name: 'RL Mandatarias'
    }).then( (e) => console.log(e.dataValues.name));

 // Columns
    await column.create({
        name: 'Todo',
        boardId: 1
    }).then( (e) => console.log(e.dataValues.name));

    await column.create({
        name: 'Todo',
        boardId: 5
    }).then( (e) => console.log(e.dataValues.name));

    await column.create({
        name: 'Doing',
        boardId: 2
    }).then( (e) => console.log(e.dataValues.name));

    await column.create({
        name: 'Fixing',
        boardId: 3
    }).then( (e) => console.log(e.dataValues.name))

    await column.create({
        name: 'Done',
        boardId: 4
    }).then( (e) => console.log(e.dataValues.name));

    await column.create({
        name: 'In revision',
        boardId: 1
    }).then( (e) => console.log(e.dataValues.name));

// Task
    await task.create({
        title: 'Build UI for onboarding flow',
        description:'',
        status: 'Todo',
        columnId: 1
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Build UI for seearch',
        description:'',
        status: 'Todo',
        columnId: 1
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Build settings UI',
        description:'',
        status: 'Todo',
        columnId: 1
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'QA and test all major user journeys',
        description:'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
        status: 'Todo',
        columnId: 1
    }).then( (e) => console.log(e.dataValues.title));


    await task.create({
        title: 'LUCAS DESIGN',
        description:'',
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Add account management endpoints',
        description:'',
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Design onboarding flow',
        description:'',
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Add search enpoints',
        description:'',
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));
   

    await task.create({
        title: 'Add authentication endpoints',
        description:'',
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Research pricing points of various competitors and trial different business models',
        description:`We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.`,
        status: 'Doing',
        columnId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await task.create({
        title: 'Conduct 5 wireframe tests',
        description:'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
        status: 'Done',
        columnId: 3
    }).then( (e) => console.log(e.dataValues.title));
    

    await task.create({
        title: 'Create wireframe prototype',
        description:'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
        status: 'Done',
        columnId: 3
    }).then( (e) => console.log(e.dataValues.title));

    // Subtask
    await subtask.create({
        title: 'Sign up page',
        isCompleted: true,
        taskId: 3

    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Sign in page',
        isCompleted: false,
        taskId: 1

    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Welcome page',
        isCompleted: false,
        taskId: 1
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Search page',
        isCompleted: false,
        taskId: 2
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Account page',
        isCompleted: false,
        taskId: 3
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Billing page',
        isCompleted: false,
        taskId: 3
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Internal testing',
        isCompleted: false,
        taskId: 4
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 5
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 6
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 6
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'LUCAAA',
        isCompleted: false,
        taskId: 7
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'Mister Flow',
        isCompleted: true,
        taskId: 8
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 9
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 9
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 9
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 10
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 11
    }).then( (e) => console.log(e.dataValues.title));

    await subtask.create({
        title: 'External page',
        isCompleted: false,
        taskId: 12
    }).then( (e) => console.log(e.dataValues.title));


}

module.exports = defaultData