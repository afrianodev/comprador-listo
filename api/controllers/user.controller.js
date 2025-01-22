import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'

export const test = (req, res) => {
    res.json({message: 'Api route working'})
}

export const updateUser = (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'No autorizado'))
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
    } catch (error) {
        next(error)
    }
}