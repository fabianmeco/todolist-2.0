const joi = require('joi');

exports.validateBody = function(schemaBody){
    return function(req, res, next){
        return joi.validate(req.body, schemaBody, {abortEarly:false, allowUnknown: true })
        .then(validated =>{ return next()})
        .catch(err => err.details.map(function(error){
            return {name: error.context.key, message: error.message}
        }));        
    }
}

