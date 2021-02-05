const taskService = require('../services/taskService');

const addTask = async (req, res ) => {
    const dataTask = req.body;

    try{

        const resultTask = await taskService.createTask(dataTask);
        return res.status(200).send({message: resultTask });

    }catch(err){
        return res.status(500).send({message: err});
    }
}

const getTasks = async ( req, res ) =>{
   
    try{
        const { data, message } = await taskService.getAllTask();
        return res.status(200).send({ data, message });

    }catch(err){
        return res.status(500).send({message: err});
    }
}

module.exports = { addTask, getTasks }

