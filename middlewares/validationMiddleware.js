
module.exports = {

    task: function(req,res, next){
        const data = req.body;
        let errors = [];
        
        if(!data.title){
            errors.push("The title is required")
        }
        if(!data.description){
            errors.push("The description is required")
        }
        if(errors.length){
            return res.status(400).send({ message: errors });
        }
        next();
    }

}


