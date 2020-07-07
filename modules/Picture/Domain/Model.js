const Joi = require('@hapi/joi')

const PictureSchema = Joi.object({
    album: Joi.number().required()
})

module.exports = PictureSchema