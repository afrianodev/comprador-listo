import { errorHandler } from "./error.js"
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.acces_token

    if(!token) return next(errorHandler(401, 'No autorizado'))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(errorHandler(403, 'Prohibido'))
        
            req.user = user
            next()
    })
}