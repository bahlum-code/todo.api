const taskService = require('../services/taskService');

const addTask = async (req, res ) => {
    const dataTask = req.body;
    try{
        const { message, code } = await taskService.createTask(dataTask);
        return res.status(code).send({message})
    }catch(err){
        return res.status(err.code).send({message: err.message})
    }
}

module.exports = { addTask }

