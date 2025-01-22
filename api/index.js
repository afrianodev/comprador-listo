import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'

dotenv.config()

const app = express()

const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO).then(() => 
    console.log('Connected to MongoDB'))
    .catch((err) =>
        {console.log(`Error to connect to data base.`, err)
    })

app.use('/api/user', userRouter)

app.use('/api/auth', authRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

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