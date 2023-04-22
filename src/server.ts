import express from 'express'
import router from './router'

const app = express()

app.get('/', (req, res) => {
    console.log('Hello from express')
    res.status(200)
    res.json({message: 'hello'})
})

//for everything that has '/api' I want the app to use the reouter
app.use('/api', router)

export default app