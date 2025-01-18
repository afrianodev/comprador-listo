import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO).then(() => 
    console.log('Connected to MongoDB'))
    .catch((err) =>
        {console.log(`Error to connect to data base.`, err)
    })

app.use('/api/user', userRouter)

app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Error en el servidor...'
    return res.status(statusCode).json({
        succes: false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})