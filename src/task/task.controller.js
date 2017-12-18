
const taskModel = require('./task.model');

exports.post = function (req, res) {
    console.log("zzzzzzzzzzzzzzzzzzzz")
    return taskModel.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]));
}

exports.get = function (req, res) {
    let where = JSON.parse(req.query.where);    
    return taskModel.findAll(where[0])
        .then(task => res.json(task))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.getOneMiddleware = function(req, res, next){
    return taskModel.find(req.params.id)
        .then(found =>{
            if(found){
                req.task = found;
                return next();
            }
            return res.status(404);
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.getOne = function(req, res){
    return res.json(req.task);
}

exports.put = function(req, res){
    return taskModel.update(req.task.id, req.body)
        .then(function(){
            return taskModel.find(req.task.id)
            .then(task => res.json(task))
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.delete = function(req, res){
    return taskModel.delete(req.task.id)
        .then(task => res.json(req.task))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}