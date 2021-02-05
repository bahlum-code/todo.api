const db = require('../models');
const Task = db.tasks;
const serverResponse = require('../resources/serverResponse');

function createTask(data) {

    return new Promise((resolve,reject) => {
        let task = {
            title: data.title,
            description: data.description
        };

        Task.create(task)
            .then( result => resolve('Task added successfully'))
            .catch( err => reject('There was an error adding task'))
    });
}

function getAllTask() {
   
    return new Promise((resolve, reject) =>{
        Task.findAll({attributes: ['title', 'description']})
            .then(result => resolve({data: result, message: 'The information was obtained correctly'}))
            .catch( err => reject( 'An unexpected error has occurred'))
    });
}

module.exports = { createTask, getAllTask }