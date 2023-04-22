import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

app.use(cors())
//every request has to go through morgan - console.logs it and goes to the next thing on the stack
app.use(morgan('dev'))
app.use(express.json())//middleware to allows a client to send the server json 
app.use(express.urlencoded({extended: true}))//allows a client to add querystring, parameters, encode and decode it

// custom middleware
// app.use((req, res, next) => {
//     req.shhh_secret = 'my middleware!'
//     next()
// })

app.get('/', (req, res) => {
    console.log('Hello from express')
    res.status(200)
    res.json({message: 'hello'})
})

//for everything that has '/api' I want the app to pass through protect middleware and use the router
app.use('/api', protect, router)

export default app