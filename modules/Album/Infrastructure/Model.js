const Joi = require('@hapi/joi')

const createAlbumSchema = Joi.object({
    name: Joi.string().min(1).max(100).required()
})

module.exports = {
    createAlbumSchema
}