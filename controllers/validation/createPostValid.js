const Joi = require('@hapi/joi')

const schema = Joi.object({
    title: Joi.string()
    .alphanum()
    .required()
    .max(200), 
    description: Joi.string()
    .required()
})


const validatePost = async (req) => {
    let payload = req.body
    return schema.validateAsync(payload)
}

module.exports = {
    validatePost
}