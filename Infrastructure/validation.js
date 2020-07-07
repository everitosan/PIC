/**
 * middleware to validate input data for endpoints
 */

 const validateParams = (joiSchema, source='body') => {
    return function(req, res, next) {
        const params = req[source]
        const {error} = joiSchema.validate(params)
        if (error) {
            next(error)
        } else {
            next()
        }
    }
 }


 module.exports = validateParams