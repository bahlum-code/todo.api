const db = require('../models');
const Task = db.tasks;

function createTask(data) {

    return new Promise((resolve,reject) => {
        let task = {
            title: data.title,
            description: data.description
        }

        Task.create(task)
            .then( result => resolve({message: 'Task added successfully', code:200}))
            .catch( err => reject({message: 'There was an error adding task', code: 500}))
    });
}

module.exports = { createTask }