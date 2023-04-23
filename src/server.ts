import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()

app.use(cors())
app.use(morgan('dev')) //every request has to go through morgan - console.logs it and goes to the next thing on the stack
app.use(express.json())//middleware to allows a client to send the server json 
app.use(express.urlencoded({extended: true}))//allows a client to add querystring, parameters, encode and decode it

app.get('/', (req, res, next) => {
    setTimeout(() => {
      next(new Error('hello'))
    },1)
  })
  
app.use('/api', protect, router)//for everything that has '/api' I want the app to pass through protect middleware and use the router

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next) => {
  console.log(err)
  res.json({message: `had an error: ${err.message}`})
})

export default app