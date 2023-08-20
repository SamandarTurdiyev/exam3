export default (schema) => {
    return (req , res , next) => {
        try {
            const {error , value} = schema.validate(req.body)
            if (error) {
                return res.send({
                    message: error.message
                })
            }
            req.result = value
            next()
        } catch (error) {
            console.log(error);
        }
    }
}